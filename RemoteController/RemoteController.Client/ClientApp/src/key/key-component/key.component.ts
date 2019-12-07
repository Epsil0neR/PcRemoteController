import { Component, HostListener } from '@angular/core';
import { IControlViewer, WebSocketService, WebSocketMessage, WebSocketMessageType, makeid, findIcon, BaseControlComponent } from 'src/core';
import { IKeyControl } from '../Models/IKeyControl';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { KeyControlMode } from '../Models/KeyControlMode';

@Component({
  selector: 'rc-key',
  templateUrl: './key.component.html',
  styleUrls: ['./key.component.css']
})
export class KeyComponent
  extends BaseControlComponent
  implements IControlViewer {

  /**
   * Data that will be sent to server on click.
   */
  private data: string = null;
  public title: string = '';
  public icon: IconDefinition = null;
  public showIconWithTitle: boolean = false;
  private mode: KeyControlMode = KeyControlMode.Press;
  private isKeyDown: boolean = false;

  constructor(private webSocketService: WebSocketService) {
    super();
  }


  load(data: IKeyControl): boolean {
    this.col = ('col' in data) ? data.col : this.colMax; // TODO: use this.col somehow.

    this.data = data.data;
    this.title = !!data.text ? data.text : '';
    this.icon = !!data.icon ? findIcon(data.icon) : null;
    this.showIconWithTitle = data.iconWithText === true;
    this.mode = 'mode' in data ? data.mode : KeyControlMode.Press;

    // TODO: Load all relevant data.
    return true;
  }

  private send(action: 'key' | 'key.down' | 'key.up') {
    console.log('Sending key:', action, this.data);
    const m = new WebSocketMessage({
      a: action,
      d: this.data,
      t: WebSocketMessageType.Request,
      h: makeid()
    });

    this.webSocketService.send(m);
  }

  @HostListener('click') onClick() {
    console.log('click');
    if (this.mode === KeyControlMode.Press)
      this.send('key');
    else if (this.mode === KeyControlMode.Toogle) {
      const isKeyDown = this.isKeyDown;
      this.isKeyDown = !isKeyDown;
      this.send(isKeyDown ? 'key.up' : 'key.down');
    }
  }

  @HostListener('mousedown')
  @HostListener('touchstart')
  onTouchstart() {
    if (this.mode !== KeyControlMode.DownUp)
      return;

    if (this.isKeyDown)
      return;

    this.isKeyDown = true;
    this.send('key.down');
  }

  @HostListener('mouseup')
  @HostListener('touchend')
  onTouchend() {
    if (this.mode !== KeyControlMode.DownUp)
      return;

    if (!this.isKeyDown)
      return;

    this.isKeyDown = false;
    this.send('key.up');
  }
}
