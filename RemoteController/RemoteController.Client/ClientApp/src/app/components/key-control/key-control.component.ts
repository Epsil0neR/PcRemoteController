import { Component, OnInit, HostListener, Input } from '@angular/core';
import { makeid } from '../../utils/makeid';
import { BaseControlComponent } from '../BaseControlComponent';
import { WebSocketService } from 'src/app/services/web-socket.service';
import { WebSocketMessage } from 'src/app/models/WebSocketMessage';
import { WebSocketMessageType } from 'src/app/models/WebSocketMessageType';
import { ControlType } from 'src/app/models/ControlType';
import { IKeyControl } from 'src/app/models/IControl';

@Component({
  selector: 'rc-key-control',
  templateUrl: './key-control.component.html',
  styleUrls: ['./key-control.component.css'],
})
export class KeyControlComponent
  extends BaseControlComponent
  implements OnInit {

  constructor(private webSocketService: WebSocketService) {
    super();
  }

  @Input() public key: string;

  ngOnInit() {
  }

  @HostListener('click') onClick() {
    console.log('key-control: click');

    const m = new WebSocketMessage();
    m.ActionName = 'key';
    m.Data = this.key;
    m.Type = WebSocketMessageType.Request;
    m.Hash = makeid();

    this.webSocketService.send(m);
  }

  protected GetControlType(): ControlType {
    return ControlType.Key;
  }

  load(data: IKeyControl) {
    super.load(data);

    this.key = data.key;
  }
}
