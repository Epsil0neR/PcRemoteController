import { Component, OnInit, HostListener, Input } from '@angular/core';
import { BaseControlComponent } from '../../BaseControlComponent';
import * as icons from '@fortawesome/free-solid-svg-icons';
import { WebSocketService, WebSocketMessage, WebSocketMessageType, makeid, ControlType } from 'src/core';
import { IKeyControl } from 'src/app/models/IControl';

@Component({
  selector: 'rc-key-control',
  templateUrl: './key-control.component.html',
  styleUrls: ['./key-control.component.css'],
})
export class KeyControlComponent
  extends BaseControlComponent
  implements OnInit {

  public icon: icons.IconDefinition;
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
    super.load(data);
    this.key = data.key;
    if (!!data.icon) {
      this.icon = this.findIcon(data.icon);
    }
    this.text = !!data.text ? data.text : data.key;
  }

  private findIcon(name: string) {
    const pack = icons.fas;
    for (const key in pack) {
      if (!pack.hasOwnProperty(key))
        continue;

      const icon = pack[key];
      if (icon.iconName === name)
        return icon;
    }
  }
}
