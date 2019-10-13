import { Component } from '@angular/core';
import { WebSocketService } from './services/web-socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';

  constructor(private service: WebSocketService) {
    window.addEventListener('focus', e => {
      if (this.service.isConnected.getValue())
        return;

      this.service.open();
    });
  }
}
