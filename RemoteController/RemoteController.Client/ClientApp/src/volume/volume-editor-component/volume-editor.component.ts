import { Component, OnInit } from '@angular/core';
import { IControlEditor, IControl } from 'src/core';

@Component({
  selector: 'rc-volume-editor',
  templateUrl: './volume-editor.component.html',
  styleUrls: ['./volume-editor.component.css']
})
export class VolumeEditorComponent
  implements IControlEditor, OnInit {

  public data: IControl = null;

  constructor() { }

  ngOnInit() {
  }

  load(data: IControl): boolean {
    this.data = !!data ? data : null;
    return true;
  }
  save(): IControl {
    return this.data;
  }
}
