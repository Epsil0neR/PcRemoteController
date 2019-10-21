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

  constructor() { }

  ngOnInit() {
  }

  load(data: IFileSystemControl): boolean {
    this.data = !!data ? data : null;

    data.maxHeight = data.maxHeight > 0 ? data.maxHeight : 0;
    return true;
  }
  save(): IFileSystemControl {
    return this.data;
  }
}
