import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { WebSocketService } from '../../../services/web-socket.service';

@Component({
  selector: 'rc-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent implements OnInit, OnDestroy {
  public currentCount = 0;
  public isConnected = false;
  private subscription: Subscription;

  public incrementCounter() {
    this.currentCount++;
  }

  constructor(public webSocketService: WebSocketService) {
  }

  ngOnInit(): void {
    this.subscription = this.webSocketService.isConnected.subscribe(value => this.isConnected = value);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
