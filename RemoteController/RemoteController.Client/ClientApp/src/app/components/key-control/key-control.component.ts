import { Component, OnInit, HostListener, Input } from '@angular/core';
import { WebSocketService } from 'src/app/services/_exports';
import { WebSocketMessage, WebSocketMessageType } from 'src/app/models/_exports';
import * as utils from '../../utils/_exports';
import { BaseControlComponent } from '../BaseControlComponent';

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
    m.Hash = utils.makeid();

    this.webSocketService.send(m);
  }
}
