import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { WebSocketMessage } from '../models/WebSocketMessage';
import { BehaviorSubject } from 'rxjs';

export interface WebSocketServiceEventMap {
  'open': any;
  'close': CloseEvent;
  'connection': boolean;
  'error': any;
  'error.open': any;
  'error.message': any;
  'error.message.send': WebSocketMessage;
  'message.raw': MessageEvent;
  'message.received': WebSocketMessage;
  'message.sending': WebSocketMessage;
  'message.sent': WebSocketMessage;
}

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private __autoReconnectInterval: number = 5 * 1000; // 5 seconds.
  private __autoReconnectTries: number = -1; // Infinite.
  private __autoReconnectTry: number = 0; // Current try of reconnect.

  private __handlers: { [id: string]: Function[] } = {};
  private __messageHandlers: { [id: string]: ((message: WebSocketMessage) => void)[] } = {};
  private __instnaceHandlers = {
    'close': (e: CloseEvent) => {
      this.raiseEvent('close', e);

      if (e.code !== 1000) // 1000 is a CLOSE_NORMAL, on which client don't need to reconnect.
        this.reconnect();

      this.raiseEvent('connection', false);
      this.isConnected.next(false);
    },
    'error': (e: CloseEvent) => {
      this.raiseEvent('error', e);

      if ((<any>e.code) === 'ECONNREFUSED' || e.reason === 'ECONNREFUSED')
        this.reconnect();
    },
    'message': (e: MessageEvent) => {
      this.raiseEvent('message.raw', e);

      try {
        const data = JSON.parse(e.data);
        const msg = WebSocketMessage.parse(data);
        if (msg === null)
          return;

        function filter(f: Function): any { return f(msg) !== false; }

        this.raiseEvent('message.received', msg);

        if (!this.__filters.every(filter))
          return;

        this.raiseMessage(msg);
      } catch (e) {
        this.raiseEvent('error.message', e);
        this.raiseEvent('error', e);
      }

    },
    'open': (e: Event) => {
      this.raiseEvent('open', e);
      this.raiseEvent('connection', true);
      this.isConnected.next(true);
    },
  };
  private __filters: Function[] = [];
  private instance: WebSocket;

  public isConnected: BehaviorSubject<boolean>;
  public logRaisingEvent: boolean = false;
  /**
   * Gets or sets auto-reconnect interval in ms. Minimum is 0 -> instant reconnect.
   * @returns {number}
   */
  get autoReconnectInterval() {
    return this.__autoReconnectInterval;
  }
  set autoReconnectInterval(value: number) {
    if (value !== null && (typeof (value) !== 'number') || isNaN(value))
      return;
    if (value < 0)
      value = 0;

    this.__autoReconnectInterval = value;
  }

  /**
   * Gets or sets auto-reconnect tries count before stopping trying to reconnect.
   * -1 -> Infinity times.
   * @returns {number}
   */
  get autoReconnectTries() {
    return this.__autoReconnectTries;
  }
  set autoReconnectTries(value: number) {
    if (value !== null && (typeof (value) !== 'number') || isNaN(value))
      return;
    if (value < -1)
      value = -1;

    this.__autoReconnectTries = value;
  }

  constructor(public url: string) {
    this.isConnected = new BehaviorSubject<boolean>(false);
  }

  public addHandler<K extends keyof WebSocketServiceEventMap>(name: K, data: (data: WebSocketServiceEventMap[K]) => any): void;
  public addHandler(name: string, handler: Function) {
    if (typeof name !== 'string')
      return;
    if (handler instanceof Function === false)
      return;

    name = name.toLowerCase();

    if (!this.__handlers.hasOwnProperty(name))
      this.__handlers[name] = [];

    this.__handlers[name].push(handler);

    // TODO: Depending on event type: check if that handler should be invoked instantly.
  }

  public removeHandler(name: string, handler: Function): boolean {
    if (typeof name !== 'string')
      return false;
    if (handler instanceof Function === false)
      return false;

    name = name.toLowerCase();

    if (!this.__handlers.hasOwnProperty(name))
      return false;

    const arr = this.__handlers[name];
    if (arr instanceof Array === false)
      return false;

    const ind = arr.indexOf(handler);
    if (ind < 0)
      return false;

    arr.splice(ind, 1);
  }

  private raiseEvent<K extends keyof WebSocketServiceEventMap>(name: K, data: WebSocketServiceEventMap[K]): void;
  private raiseEvent(name: string, data: any = null): void {
    if (typeof name !== 'string')
      return;

    if (this.logRaisingEvent)
      console.log('Raise event:', name, data);

    name = name.toLowerCase();

    if (!this.__handlers.hasOwnProperty(name))
      return;

    const handlers = this.__handlers[name];
    if (handlers instanceof Array === false)
      return;

    handlers.forEach(h => h(data));
  }

  public send(message: WebSocketMessage) {
    if (message instanceof WebSocketMessage === false)
      return;

    const data = JSON.stringify(message.toDto());

    try {
      this.raiseEvent('message.sending', message);
      this.instance.send(data);
      this.raiseEvent('message.sent', message);
    } catch (e) {
      this.raiseEvent('error.message.send', message);
      this.raiseEvent('error.message', { e, message });
      this.raiseEvent('error', { e, message });
    }
  }

  public open(): void {
    this.close();
    try {
      this.instance = new WebSocket(this.url);
      this.instanceCreated(this.instance);
      this.__autoReconnectTry = 0;
    } catch (e) {
      this.raiseEvent('error.open', e);
    }
  }

  public close(): void {
    if (this.instance instanceof WebSocket) {
      const ws = this.instance;
      this.instance = null;
      ws.close();
      this.instanceClosed(ws);
    }
  }

  /**
   * Reconnects after autoReconnectInterval elapses.
   */
  public reconnect(): void {
    this.close();

    // Check if auto-reconnect is limited.
    if (this.__autoReconnectTries >= 0 && this.__autoReconnectTry >= this.__autoReconnectTries)
      return;

    this.__autoReconnectTry++;
    if (this.autoReconnectInterval > 0)
      setTimeout(() => this.open(), this.autoReconnectInterval);
    else
      this.open();
  }

  private instanceCreated(instance: WebSocket) {
    for (const evt in this.__instnaceHandlers) {
      if (this.__instnaceHandlers.hasOwnProperty(evt) === false)
        continue;

      const handler = this.__instnaceHandlers[evt];
      instance.addEventListener(evt, handler);
    }
  }
  private instanceClosed(instance: WebSocket) {
    for (const evt in this.__instnaceHandlers) {
      if (this.__instnaceHandlers.hasOwnProperty(evt) === false)
        continue;

      const handler = this.__instnaceHandlers[evt];
      instance.removeEventListener(evt, handler);
    }
  }

  /**
   * Adds filter that checks if received message from WebSocket can be handled.
   * @param filter Function that returns should return false to prevent message from handling
   */
  public addFilter(filter: Function) {
    if (!(filter instanceof Function))
      return;

    this.__filters.push(filter);
  }

  /**
   * Removes filter that checks if received message from WebSocket can be handled.
   * @param filter Function that returns should return false to prevent message from handling
   * @returns How many filters removed. In case same filter was added 2 times -> will return 2.
   */
  public removeFilter(filter: Function): number {
    if (!(filter instanceof Function))
      return 0;

    let rv = 0;
    let ind = this.__filters.indexOf(filter);
    while (ind >= 0) {
      this.__filters.splice(ind, 1);
      ind = this.__filters.indexOf(filter);
      rv++;
    }
    return rv;
  }

  private raiseMessage(message: WebSocketMessage) {
    let action = message.ActionName.toLowerCase();

    if (!this.__messageHandlers.hasOwnProperty(action))
      return;

    action = action.toLowerCase();

    const handlers = this.__messageHandlers[action];
    if (handlers instanceof Array === false)
      return;

    handlers.forEach(x => x(message));
  }
  public addMessageHandler(action: string, handler: (message: WebSocketMessage) => void) {
    if (typeof action !== 'string')
      return;
    if (handler instanceof Function === false)
      return;

    action = action.toLowerCase();

    if (!this.__messageHandlers.hasOwnProperty(action))
      this.__messageHandlers[action] = [];

    this.__messageHandlers[action].push(handler);
  }
  public removeMessageHandler(name: string, handler: (message: WebSocketMessage) => void): boolean {
    if (typeof name !== 'string')
      return false;
    if (handler instanceof Function === false)
      return false;

    name = name.toLowerCase();

    if (!this.__messageHandlers.hasOwnProperty(name))
      return false;

    const arr = this.__messageHandlers[name];
    if (arr instanceof Array === false)
      return false;

    const ind = arr.indexOf(handler);
    if (ind < 0)
      return false;

    arr.splice(ind, 1);
  }
}
