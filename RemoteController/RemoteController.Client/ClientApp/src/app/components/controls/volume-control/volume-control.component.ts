import { Component, OnInit, ViewChild, ElementRef, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import {
  WebSocketService, WebSocketMessage, IControl,
  WebSocketMessageType, makeid, InformersStateService, BaseControlComponent
} from 'src/core';

@Component({
  selector: 'rc-volume-control',
  templateUrl: './volume-control.component.html',
  styleUrls: ['./volume-control.component.css']
})
export class VolumeControlComponent
  extends BaseControlComponent
  implements OnInit, OnDestroy {

  private subscription: Subscription;
  @Input() public isEnabled: boolean = false;
  @ViewChild('inp', { static: true }) input: ElementRef;

  constructor(
    private webSocketService: WebSocketService,
    private informersState: InformersStateService) {
    super();

  }

  ngOnInit() {
    this.webSocketService.addMessageHandler('Informer.Sound', this.messageInformerSound);
    this.webSocketService.addHandler('connection', this.onConnectionChanged);
    this.subscription = this.informersState.Sound.subscribe(value => {
      const input = <HTMLInputElement>(this.input.nativeElement);
      if (!!value)
        input.value = <any>value.OutputVolume;
      this.isEnabled = !!value && !value.OutputIsMuted;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.webSocketService.removeHandler('connection', this.onConnectionChanged);
    this.webSocketService.removeMessageHandler('Informer.Sound', this.messageInformerSound);
  }

  private onConnectionChanged = (connected: boolean) => {
    this.isEnabled = connected;
  }

  messageInformerSound = (m: WebSocketMessage) => {
    return;
    this.isEnabled = true;
    const data = <IInformerSound>m.Data;
    (<HTMLInputElement>(this.input.nativeElement)).value = <any>data.OutputVolume;
  }

  public load(data: IControl) {
    this.col = data.col;
    throw new Error('Obsolete');
  }

  setVolume(value: string) {
    if (!this.isEnabled)
      return;

    const m = new WebSocketMessage({
      a: 'Sound.Output.Volume',
      d: parseInt(value, 10),
      t: WebSocketMessageType.Request,
      h: makeid()
    });

    this.webSocketService.send(m);
  }
}
