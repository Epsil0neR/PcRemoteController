import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { WebSocketMessage } from '../models/WebSocketMessage';
import { WebSocketService } from './web-socket.service';
import { WebSocketMessageType } from '../models/WebSocketMessageType';
import { makeid } from '../utils/makeid';

@Injectable({
  providedIn: 'root'
})
export class InformersStateService {

  public Sound: BehaviorSubject<IInformerSound>;

  private handlers: { [action: string]: (msg: WebSocketMessage) => void };

  constructor(private service: WebSocketService) {
    this.handlers = {
      'Informer.Sound': (msg) => this.onSound(msg),
    };
    this.Sound = new BehaviorSubject<IInformerSound>(null);

    this.proceedHandlers();
    this.checkServer();
  }

  private proceedHandlers() {
    for (const action in this.handlers) {
      if (!this.handlers.hasOwnProperty(action))
        continue;

      const handler = this.handlers[action];
      this.service.addMessageHandler(action, handler);
    }
  }

  private onSound(msg: WebSocketMessage) {
    if (!!msg.Data)
      this.Sound.next(<IInformerSound>msg.Data);
  }

  private checkServer() {
    if (!this.service.isConnected.getValue())
      return;

    for (const action in this.handlers) {
      if (!this.handlers.hasOwnProperty(action))
        continue;

      const m = new WebSocketMessage({
        a: action,
        t: WebSocketMessageType.Request,
        h: makeid()
      });

      this.service.send(m);
    }
  }
}