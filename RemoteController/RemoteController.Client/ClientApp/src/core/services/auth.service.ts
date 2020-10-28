import { Injectable } from '@angular/core';
import { WebSocketService } from './web-socket.service';
import { WebSocketMessage } from '../models/WebSocketMessage';
import { WebSocketMessageType } from '../models/WebSocketMessageType';
import { makeid } from '../utils/makeid';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private static __key: string = 'rc.auth';
  private static ActionAuth = 'Auth';

  constructor() { }

  public setToken(token: string): void {
    if (typeof token === 'string' || <any>token instanceof String)
      token = token.length > 0 ? token : null;
    else
      token = null;

    localStorage.setItem(AuthService.__key, token === null ? '' : token);
  }

  public clearToken(): void {
    localStorage.removeItem(AuthService.__key);
  }

  /**
   * Gets authorization token or null if not authorized.
   */
  public getToken(): string {
    const token = localStorage.getItem(AuthService.__key);

    if (typeof token === 'string' || <any>token instanceof String)
      return token.length > 0 ? token : null;

    return null;
  }

  public link(webSocketService: WebSocketService): void {
    webSocketService.addMessageHandler(AuthService.ActionAuth, (m: WebSocketMessage) => {
      // Store auth token.
      if (this.getToken() === null && m.Data instanceof String || typeof m.Data === 'string')
        this.setToken(<string>m.Data);

      webSocketService.isAuthorized.next(true);
    });
    webSocketService.isConnected.subscribe(value => {
      if (value !== true) {
        webSocketService.isAuthorized.next(false);
        return;
      }

      this.auth(webSocketService);
    });
  }
  private auth(webSocketService: WebSocketService) {
    const token = this.getToken();

    webSocketService.send(new WebSocketMessage({
      a: AuthService.ActionAuth,
      t: WebSocketMessageType.Request,
      d: token,
      h: makeid()
    }));
  }
}
