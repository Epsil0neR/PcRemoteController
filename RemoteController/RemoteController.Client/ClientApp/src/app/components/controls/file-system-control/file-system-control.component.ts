import { Component, OnInit, OnDestroy } from '@angular/core';
import { BaseControlComponent } from '../../BaseControlComponent';
import { ControlType } from 'src/app/models/ControlType';
import { IFileSystemControl } from 'src/app/models/IControl';
import { WebSocketService } from 'src/app/services/web-socket.service';
import { WebSocketMessage } from 'src/app/models/WebSocketMessage';
import { WebSocketMessageType } from 'src/app/models/WebSocketMessageType';
import { makeid } from 'src/app/utils/makeid';
import { Subscription } from 'rxjs';
import { IFileSystemList } from 'src/app/models/IFileSystemList';
import * as Icons from '@fortawesome/free-solid-svg-icons';

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

  public files: { url: string, title: string }[] = null;
  public folders: { url: string, title: string }[] = null;
  public paths: { url: string, title: string }[] = null;
  public path: string = '';

  public iconFolder: Icons.IconDefinition = Icons.faFolder;
  public iconFile: Icons.IconDefinition = Icons.faFile;

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
        this.goToPath('');
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
    if (m.Type === WebSocketMessageType.Response) {
      const r = <IFileSystemList>m.Data;
      this.path = !!r.path ? r.path.join('\\') + '\\' : '';
      const map = (x: string) => {
        return {
          url: this.path + x,
          title: x
        };
      };

      this.files = !!r.files ? r.files.map(map) : [];
      this.folders = !!r.folders ? r.folders.map(map) : [];
      this.paths = !!r.path ? r.path.map((x, i, arr) => {
        const p = arr.slice(0, i + 1);
        return {
          url: p.join('\\'),
          title: x
        };
      }) : [];
      this.paths.unshift({ url: '', title: '..' });
    }
  }

  goToPath(url: string) {
    const m = new WebSocketMessage({
      a: 'FileSystem.List',
      t: WebSocketMessageType.Request,
      h: makeid(),
      d: url
    });
    this.service.send(m);
  }

  exec(url: string) {
    const m = new WebSocketMessage({
      a: 'FileSystem.Exec',
      t: WebSocketMessageType.Request,
      h: makeid(),
      d: url
    });
    this.service.send(m);
  }
}
