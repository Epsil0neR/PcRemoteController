import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ControlType, WebSocketService } from 'src/core';

@Component({
  selector: 'rc-counter-component',
  templateUrl: './counter.component.html',
})
export class CounterComponent implements OnInit, OnDestroy {
  public currentCount = 0;
  public isConnected = false;
  private subscription: Subscription;

  public readonly controlTypes;
  public readonly controlType: ControlType = ControlType.None;

  public incrementCounter() {
    this.currentCount++;
  }


  constructor(public webSocketService: WebSocketService) {
    this.controlTypes = ControlType;
  }

  ngOnInit(): void {
    this.subscription = this.webSocketService.isConnected.subscribe(value => this.isConnected = value);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
