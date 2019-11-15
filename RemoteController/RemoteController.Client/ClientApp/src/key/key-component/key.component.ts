import { Component, OnInit, HostListener, ChangeDetectorRef } from '@angular/core';
import { IControlViewer, WebSocketService, WebSocketMessage, WebSocketMessageType, makeid, findIcon, BaseControlComponent } from 'src/core';
import { IKeyControl } from '../Models/IKeyControl';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

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

  constructor(private webSocketService: WebSocketService) {
    super();
  }


  load(data: IKeyControl): boolean {
    this.col = ('col' in data) ? data.col : this.colMax; // TODO: use this.col somehow.

    this.data = data.data;
    this.title = !!data.text ? data.text : '';
    this.icon = !!data.icon ? findIcon(data.icon) : null;
    this.showIconWithTitle = data.iconWithText === true;

    // TODO: Load all relevant data.
    return true;
  }

  @HostListener('click') onClick() {
    const m = new WebSocketMessage({
      a: 'key',
      d: this.data,
      t: WebSocketMessageType.Request,
      h: makeid()
    });

    this.webSocketService.send(m);
  }
}
