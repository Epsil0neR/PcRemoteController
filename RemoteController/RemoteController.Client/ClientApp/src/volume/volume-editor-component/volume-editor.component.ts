import { Component, OnInit } from '@angular/core';
import { IControlEditor, IControl } from 'src/core';

@Component({
  selector: 'rc-volume-editor',
  templateUrl: './volume-editor.component.html',
  styleUrls: ['./volume-editor.component.css']
})
export class VolumeEditorComponent
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
