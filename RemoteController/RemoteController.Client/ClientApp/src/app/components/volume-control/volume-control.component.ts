import { Component, OnInit, ViewChild, ElementRef, OnDestroy, Input } from '@angular/core';
import { BaseControlComponent } from '../BaseControlComponent';
import { ControlType } from 'src/app/models/ControlType';
import { IControl } from 'src/app/models/IControl';
import { WebSocketService } from 'src/app/services/web-socket.service';
import { WebSocketMessage } from 'src/app/models/WebSocketMessage';
import { WebSocketMessageType } from 'src/app/models/WebSocketMessageType';
import { makeid } from 'src/app/utils/makeid';

@Component({
  selector: 'rc-volume-control',
  templateUrl: './volume-control.component.html',
  styleUrls: ['./volume-control.component.css']
})
export class VolumeControlComponent
  extends BaseControlComponent
  implements OnInit, OnDestroy {

  @Input() public isEnabled: boolean = false;
  @ViewChild('inp', { static: true }) input: ElementRef;

  constructor(private webSocketService: WebSocketService) {
    super();
  }

  ngOnInit() {
    this.webSocketService.addMessageHandler('Informer.Sound', this.messageInformerSound);
    // TODO: What if informer already informed??
    // TODO: Add struct for Informer.Sound message data.
  }

  ngOnDestroy(): void {
    this.webSocketService.removeMessageHandler('Informer.Sound', this.messageInformerSound);
  }

  messageInformerSound = (m: WebSocketMessage) => {
    this.isEnabled = true;
    (<HTMLInputElement>(this.input.nativeElement)).value = m.Data.OutputVolume;
  }

  protected GetControlType(): ControlType {
    return ControlType.Volume;
  }

  public load(data: IControl) {
    super.load(data);
  }

  setVolume(value: string) {
    if (!this.isEnabled)
      return;

    const m = new WebSocketMessage();
    m.ActionName = 'Sound.Output.Volume';
    m.Data = parseInt(value, 10);
    m.Type = WebSocketMessageType.Request;
    m.Hash = makeid();

    this.webSocketService.send(m);
  }
}
