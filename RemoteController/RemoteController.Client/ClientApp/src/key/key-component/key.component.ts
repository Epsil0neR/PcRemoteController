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
  private repeat?: number = 100;
  private repeatHandler: any | null = null;

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

    const r = +data.r;
    this.repeat = !isNaN(r) && r > 0 ? r : 100;

    // Load all relevant data.
    return true;
  }

  private send(action: 'key' | 'key.down' | 'key.up') {
    const m = new WebSocketMessage({
      a: action,
      d: this.data,
      t: WebSocketMessageType.Request,
      h: makeid()
    });

    this.webSocketService.send(m);
  }

  @HostListener('click')
  onClick() {
    if (this.mode === KeyControlMode.Press)
      this.send('key');
  }

  @HostListener('mousedown')
  @HostListener('touchstart')
  onTouchstart() {
    if (this.isKeyDown)
      return;

    switch (this.mode) {
      case KeyControlMode['Long press']:
        this.isKeyDown = true;
        this.send('key.down');
        break;
      case KeyControlMode.Repeatable:
        this.send('key');

        if (this.repeatHandler !== null) {
          clearInterval(this.repeatHandler);
          this.repeatHandler = null;
        }
        this.isKeyDown = true;
        this.repeatHandler = setInterval(() => {
          this.send('key');
        }, this.repeat);
    }
  }

  @HostListener('mouseup')
  @HostListener('touchend')
  onTouchend() {
    if (!this.isKeyDown)
      return;

    switch (this.mode) {
      case KeyControlMode['Long press']:
        this.isKeyDown = false;
        this.send('key.up');
        break;
      case KeyControlMode.Repeatable:
        if (this.repeatHandler !== null) {
          this.isKeyDown = false;
          clearInterval(this.repeatHandler);
          this.repeatHandler = null;
        }
        break;
    }
  }
}
