import { Component } from '@angular/core';
import { WebSocketService } from 'src/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
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
