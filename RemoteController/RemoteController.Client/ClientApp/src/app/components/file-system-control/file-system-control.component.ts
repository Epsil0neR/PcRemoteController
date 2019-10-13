import { Component, OnInit, OnDestroy } from '@angular/core';
import { BaseControlComponent } from '../BaseControlComponent';
import { ControlType } from 'src/app/models/ControlType';
import { IFileSystemControl } from 'src/app/models/IControl';
import { WebSocketService } from 'src/app/services/web-socket.service';
import { WebSocketMessage } from 'src/app/models/WebSocketMessage';
import { WebSocketMessageType } from 'src/app/models/WebSocketMessageType';
import { makeid } from 'src/app/utils/makeid';
import { Subscription } from 'rxjs';

@Component({
  selector: 'rc-file-system-control',
  templateUrl: './file-system-control.component.html',
  styleUrls: ['./file-system-control.component.css']
})
export class FileSystemControlComponent
  extends BaseControlComponent
  implements OnInit, OnDestroy {

  static readonly lsKeyRoot: string = 'rc.components.file-system';
  private lsKey: string = null;
  private messageHandlers: { [action: string]: (msg: WebSocketMessage) => void } = null;
  private subscription: Subscription;

  constructor(private service: WebSocketService) {
    super();

    this.messageHandlers = {
      'FileSystem.List': (m) => this.onFileSystemList(m)
    };
  }

  ngOnInit() {
    for (const action in this.messageHandlers) {
      if (!this.messageHandlers.hasOwnProperty(action))
        continue;

      const handler = this.messageHandlers[action];
      this.service.addMessageHandler(action, handler);
    }

    this.subscription = this.service.isConnected.subscribe(value => {
      if (value && !!this.lsKey)
        this.sendListReq();
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    for (const action in this.messageHandlers) {
      if (!this.messageHandlers.hasOwnProperty(action))
        continue;

      const handler = this.messageHandlers[action];
      this.service.removeMessageHandler(action, handler);
    }
  }

  protected GetControlType(): ControlType {
    return ControlType.FileSystem;
  }

  public load(data: IFileSystemControl) {
    super.load(data);

    this.lsKey = `${FileSystemControlComponent.lsKeyRoot}.${data.id}`;

  }

  onFileSystemList(m: WebSocketMessage): void {
    console.log('OnFileSystemList: ', m);
  }

  private sendListReq() {
    const m = new WebSocketMessage({
      a: 'FileSystem.List',
      t: WebSocketMessageType.Request,
      h: makeid(),
      d: 'Download'
    });
    this.service.send(m);
  }
}
