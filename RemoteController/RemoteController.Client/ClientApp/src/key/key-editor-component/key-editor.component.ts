import { Component, OnInit } from '@angular/core';
import { IControlEditor, IControl } from 'src/core';
import { IKeyControl } from '../Models/IKeyControl';
import { KeyCodes } from '../Models/KeysList';

@Component({
  selector: 'rc-key-editor',
  templateUrl: './key-editor.component.html',
  styleUrls: ['./key-editor.component.css']
})
export class KeyEditorComponent
  implements IControlEditor, OnInit {

  public keyCodes = KeyCodes;
  public data: IKeyControl = null;
  public key: { name: string, value: string } = null;

  constructor() { }

  ngOnInit() {
  }

  load(data: IKeyControl): boolean {
    if (!!data) {
      this.data = data;
      this.key = this.keyCodes.find(x => x.value === data.data);
    } else {
      this.data = null;
      this.key = null;
    }
    return true;
  }
  save(): IControl {
    if (!!this.key) {
      this.data.data = this.key.value;
      this.data.text = this.key.name;
    }
    return this.data;
  }

  onKeyChanged(data: { name: string, value: string }) {
    this.key = data;
  }
}
