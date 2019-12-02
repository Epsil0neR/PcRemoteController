import { Component, OnInit } from '@angular/core';
import { IControlEditor, IControl } from 'src/core';
import { IFileSystemControl } from '../Models/IFileSystemControl';

@Component({
  selector: 'rc-file-system-editor',
  templateUrl: './file-system-editor.component.html',
  styleUrls: ['./file-system-editor.component.css']
})
export class FileSystemEditorComponent
  implements IControlEditor, OnInit {

  public data: IFileSystemControl = null;
  public col: number;
  public id: string;
  public maxHeight: number;

  constructor() { }

  ngOnInit() {
  }

  load(data: IFileSystemControl): boolean {
    this.data = !!data ? data : null;
    this.col = !!data ? data.col : 0;
    this.id = !!data ? data.id : '';
    this.maxHeight = !!data && data.maxHeight > 0 ? data.maxHeight : 0;

    return true;
  }
  save(): IFileSystemControl {
    const d = this.data;
    if (!!d) {
      if (d.id !== this.id) {
        // TODO: remove from storage if not used by others.
      }

      d.id = this.id;
      d.col = this.col;
      d.maxHeight = this.maxHeight;
    }
    return d;
  }
}
