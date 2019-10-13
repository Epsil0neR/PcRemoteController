import { Component, OnInit, HostListener, Input } from '@angular/core';
import { makeid } from '../../utils/makeid';
import { BaseControlComponent } from '../BaseControlComponent';
import { WebSocketService } from 'src/app/services/web-socket.service';
import { WebSocketMessage } from 'src/app/models/WebSocketMessage';
import { WebSocketMessageType } from 'src/app/models/WebSocketMessageType';
import { ControlType } from 'src/app/models/ControlType';
import { IKeyControl } from 'src/app/models/IControl';
import * as icons from '@fortawesome/free-solid-svg-icons';

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
    console.log('key-control: click');

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

    console.log('Icon: ', icons.faVolumeUp);
    console.log('Icons: ', icons);
    console.log('Icons fas: ', icons.fas);
    console.log(icons.faAd, icons.fas['faAd']);
    console.log(icons.faAd === icons.fas['faAd']);
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
