import { Component } from '@angular/core';
import { WebSocketService } from '../services/web-socket.service';

@Component({
    selector: 'rc-counter-component',
    templateUrl: './counter.component.html'
})
export class CounterComponent {
    public currentCount = 0;
    public isConnected = false;

    public incrementCounter() {
        this.currentCount++;
    }

    constructor(
        public webSocketService: WebSocketService
    ) {
        this.webSocketService.addHandler('connection', (connected) => {
          this.isConnected = connected;
        });
        this.isConnected = this.webSocketService.state === WebSocket.OPEN;
    }
}
