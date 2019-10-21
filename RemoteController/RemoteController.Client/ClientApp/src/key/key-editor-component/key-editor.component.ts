import { Component, OnInit } from '@angular/core';
import { IControlEditor, IControl } from 'src/core';
import { IKeyControl } from '../Models/IKeyControl';

@Component({
  selector: 'rc-key-editor',
  templateUrl: './key-editor.component.html',
  styleUrls: ['./key-editor.component.css']
})
export class KeyEditorComponent
  implements IControlEditor, OnInit {

  public data: IKeyControl = null;

  constructor() { }

  ngOnInit() {
  }

  load(data: IKeyControl): boolean {
    this.data = !!data ? data : null;
    return true;
  }
  save(): IControl {
    return this.data;
  }
}
