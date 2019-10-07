import { Component } from '@angular/core';
import { WebSocketService } from "../services/_exports";

@Component({
    selector: 'app-counter-component',
    templateUrl: './counter.component.html'
})
export class CounterComponent {
    public currentCount = 0;
    public isConnected = false;

    public incrementCounter() {
        this.currentCount++;
    }

    constructor(
        public WebSocketService: WebSocketService
    ) {
        this.WebSocketService.addHandler('connection', (connected) => {
          this.isConnected = connected;
        });
        this.isConnected = this.WebSocketService.state === WebSocket.OPEN;
    }
}
