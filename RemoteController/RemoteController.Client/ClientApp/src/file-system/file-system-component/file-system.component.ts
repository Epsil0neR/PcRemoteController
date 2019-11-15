import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { IFileSystemList } from 'src/file-system/Models/IFileSystemList';
import * as Icons from '@fortawesome/free-solid-svg-icons';
import { WebSocketMessage, WebSocketService, WebSocketMessageType, makeid, BaseControlComponent, IControlViewer } from 'src/core';
import { IFileSystemControl } from '../Models/IFileSystemControl';
import { FileSystemPathsService } from '../Services/file-system-paths.service';

@Component({
  selector: 'rc-file-system',
  templateUrl: './file-system.component.html',
  styleUrls: ['./file-system.component.css']
})
export class FileSystemComponent
  extends BaseControlComponent
  implements IControlViewer, OnInit, OnDestroy {

  private messageHandlers: { [action: string]: (msg: WebSocketMessage) => void } = null;
  private subscription: Subscription;
  private initialized: boolean = false;
  private id: string;
  private socketId: string;

  public files: { url: string, title: string }[] = null;
  public folders: { url: string, title: string }[] = null;
  public paths: { url: string, title: string }[] = null;
  public path: string = '';

  public maxHeight: number = 0;
  public iconFolder: Icons.IconDefinition = Icons.faFolder;
  public iconFile: Icons.IconDefinition = Icons.faFile;

  constructor(
    private service: WebSocketService,
    private pathsService: FileSystemPathsService) {
    super();

    this.messageHandlers = {
      'FileSystem.List': (m) => this.onFileSystemList(m)
    };
    this.socketId = this.pathsService.generateId();
  }

  ngOnInit() {
    for (const action in this.messageHandlers) {
      if (!this.messageHandlers.hasOwnProperty(action))
        continue;

      const handler = this.messageHandlers[action];
      this.service.addMessageHandler(action, handler);
    }

    this.subscription = this.service.isConnected.subscribe(value => {
      if (!value)
        return;

      this.goToPath(!!this.path ? this.path : '');
    });

    this.initialized = true;
  }

  ngOnDestroy() {
    this.initialized = false;
    this.subscription.unsubscribe();
    for (const action in this.messageHandlers) {
      if (!this.messageHandlers.hasOwnProperty(action))
        continue;

      const handler = this.messageHandlers[action];
      this.service.removeMessageHandler(action, handler);
    }
  }

  public load(data: IFileSystemControl): boolean {
    this.col = ('col' in data) ? data.col : this.colMax; // TODO: use this.col somehow.

    this.id = data.id;
    this.maxHeight = data.maxHeight > 0 ? data.maxHeight : 0;
    this.socketId = !!this.id ? this.id : this.pathsService.generateId();

    // Path for control is loaded only if control has unique id.
    this.path = !!this.id ? this.pathsService.getPath(this.id) : '';
    if (!!this.path && this.initialized)
      this.goToPath(this.path);

    // TODO
    return true;
  }

  onFileSystemList(m: WebSocketMessage): void {
    if (!m || !m.Hash || !m.Hash.startsWith(this.socketId))
      return;
    if (m.Type === WebSocketMessageType.Response) {
      const r = <IFileSystemList>m.Data;
      this.path = !!r.path ? r.path.join('\\') : '';
      const path = !!this.path ? this.path + '\\' : '';
      const map = (x: string) => {
        return {
          url: path + x,
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

      if (!!this.id) // Save path only if unique id is specified.
        this.pathsService.setPath(this.id, this.path);
    }
  }

  goToPath(url: string) {
    const m = new WebSocketMessage({
      a: 'FileSystem.List',
      t: WebSocketMessageType.Request,
      h: `${this.socketId}-${makeid()}`,
      d: url
    });
    this.service.send(m);
  }

  exec(url: string) {
    const m = new WebSocketMessage({
      a: 'FileSystem.Exec',
      t: WebSocketMessageType.Request,
      h: `${this.socketId}-${makeid()}`,
      d: url
    });
    this.service.send(m);
  }
}
