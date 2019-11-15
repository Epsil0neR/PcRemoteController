import { Component, OnInit, ViewChild, ElementRef, Input, OnDestroy } from '@angular/core';
import {
  BaseControlComponent, IControlViewer, IControl, WebSocketService, InformersStateService,
  WebSocketMessage, WebSocketMessageType, makeid
} from 'src/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'rc-volume',
  templateUrl: './volume.component.html',
  styleUrls: ['./volume.component.css']
})
export class VolumeComponent
  extends BaseControlComponent
  implements IControlViewer, OnInit, OnDestroy {

  private subs: Subscription[] = [];
  @ViewChild('inp', { static: true }) input: ElementRef;
  @Input() public isEnabled: boolean = false;

  constructor(
    private webSocketService: WebSocketService,
    private informers: InformersStateService
  ) {
    super();
  }

  ngOnInit() {
    this.subs.push(this.informers.Sound.subscribe(value => {
      const input = <HTMLInputElement>(this.input.nativeElement);
      if (!!value)
        input.value = <any>value.OutputVolume;
      this.isEnabled = !!value && !value.OutputIsMuted
        && this.webSocketService.isConnected.getValue();
    }));
    this.subs.push(this.webSocketService.isConnected.subscribe(x => {
      const sound = this.informers.Sound.getValue();
      this.isEnabled = x && !!sound && !sound.OutputIsMuted;
    }));
  }
  ngOnDestroy(): void {
    this.subs.forEach(x => x.unsubscribe());
  }

  load(data: IControl): boolean {
    // Set column size in super class.
    this.col = ('col' in data) ? data.col : this.colMax; // TODO: use this.col somehow.

    return true;
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
