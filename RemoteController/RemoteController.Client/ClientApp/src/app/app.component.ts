import { Component } from '@angular/core';
import { from } from 'rxjs';
import { WebSocketService } from 'src/core';
import { WakeLockSentinel, Navigator } from 'src/@types/WakeLock'

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
