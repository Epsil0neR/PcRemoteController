import { Component, OnInit } from '@angular/core';
import { IControlEditor, IControl } from 'src/core';

@Component({
  selector: 'rc-file-system-editor',
  templateUrl: './file-system-editor.component.html',
  styleUrls: ['./file-system-editor.component.css']
})
export class FileSystemEditorComponent
  implements IControlEditor, OnInit {

  constructor() { }

  ngOnInit() {
  }

  load(data: IControl): boolean {
    throw new Error('Method not implemented.');
  }
  save(): IControl {
    throw new Error('Method not implemented.');
  }
}
