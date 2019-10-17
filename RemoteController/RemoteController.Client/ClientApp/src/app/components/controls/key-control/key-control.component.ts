import { Component, OnInit, HostListener, Input } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { WebSocketService, WebSocketMessage, WebSocketMessageType, makeid, ControlType, BaseControlComponent, findIcon } from 'src/core';
import { IKeyControl } from 'src/key';

@Component({
  selector: 'rc-key-control',
  templateUrl: './key-control.component.html',
  styleUrls: ['./key-control.component.css'],
})
export class KeyControlComponent
  extends BaseControlComponent
  implements OnInit {

  public icon: IconDefinition;
  text: string;

  constructor(private webSocketService: WebSocketService) {
    super();
  }

  @Input() public key: string;

  ngOnInit() {
  }

  @HostListener('click') onClick() {
    const m = new WebSocketMessage({
      a: 'key',
      d: this.key,
      t: WebSocketMessageType.Request,
      h: makeid()
    });

    this.webSocketService.send(m);
  }

  protected GetControlType(): ControlType {
    return ControlType.Key;
  }

  load(data: IKeyControl) {
    this.col = data.col;
    throw new Error('Obsolete');
    this.key = data.data;
    if (!!data.icon) {
      this.icon = findIcon(data.icon);
    }
    this.text = !!data.text ? data.text : data.data;
  }
}
