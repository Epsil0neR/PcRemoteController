import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { WebSocketService } from './web-socket.service';
import { WebSocketMessage } from '../models/WebSocketMessage';
import { BehaviorSubject } from 'rxjs';
import { makeid } from '../utils/makeid';
import { WebSocketMessageType } from '../models/WebSocketMessageType';

@Injectable({
  providedIn: 'root'
})
export class InformersStateService implements OnInit, OnDestroy {

  public Sound: BehaviorSubject<IInformerSound>;

  private handlers: { [action: string]: (msg: WebSocketMessage) => void } = {
    'Informer.Sound': (msg) => this.onSound(msg),
  }

  constructor(private service: WebSocketService) {
    this.Sound = new BehaviorSubject<IInformerSound>(null);
  }

  ngOnInit(): void {
    this.proceedHandlers(this.service.removeHandler);
    this.checkServer();
    this.service.addHandler('connection', this.onConnection);
  }
  ngOnDestroy(): void {
    this.service.removeHandler('connection', this.onConnection);
    this.proceedHandlers(this.service.addHandler);
  }

  private onConnection = (connected: boolean) => {
    if (connected)
      this.checkServer();
  }

  private proceedHandlers(func: (name: string, handler: Function) => void) {
    for (const action in this.handlers) {
      if (!this.handlers.hasOwnProperty(action))
        continue;

      const handler = this.handlers[action];
      func(action, handler);
    }
  }

  private onSound(msg: WebSocketMessage) {
    if (!!msg.Data)
      this.Sound.next(<IInformerSound>msg.Data);
  }

  private checkServer() {
    if (this.service.state !== WebSocket.OPEN)
      return;

    for (const action in this.handlers) {
      if (!this.handlers.hasOwnProperty(action))
        continue;

      const m = new WebSocketMessage();
      m.ActionName = action;
      m.Type = WebSocketMessageType.Request;
      m.Hash = makeid();

      this.service.send(m);
    }
  }
}
