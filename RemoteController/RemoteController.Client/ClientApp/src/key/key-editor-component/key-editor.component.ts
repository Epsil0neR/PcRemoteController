import { Component, OnInit } from '@angular/core';
import { IControlEditor, IControl, findIcon } from 'src/core';
import { IKeyControl } from '../Models/IKeyControl';
import { KeyControlMode } from '../Models/KeyControlMode';
import { KeyCodes } from '../Models/KeysList';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

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
  public icon: IconDefinition = null;
  public showIconPicker: boolean = false;
  public mode: KeyControlMode = KeyControlMode.Press;
  public modes = KeyControlMode;

  constructor() { }

  ngOnInit() {
  }

  load(data: IKeyControl): boolean {
    if (!!data) {
      this.data = data;
      this.key = this.keyCodes.find(x => x.value === data.data);
      this.icon = !!data.icon ? findIcon(data.icon) : null;
      this.mode = 'mode' in data ? data.mode : KeyControlMode.Press;
    } else {
      this.data = null;
      this.key = null;
      this.icon = null;
      this.mode = KeyControlMode.Press;
    }
    return true;
  }
  save(): IControl {
    if (!!this.key) {
      this.data.data = this.key.value;
      this.data.text = this.key.name;
      this.data.icon = !!this.icon ? this.icon.iconName : null;
      this.data.mode = this.mode;
    }
    return this.data;
  }

  onKeyChanged(data: { name: string, value: string }) {
    this.key = data;
  }
  onModeChanged(data: KeyControlMode) {
    console.log('Changing mode: ', data);
    this.mode = data;
  }

  changeIcon(icon: IconDefinition) {
    this.icon = icon;
    this.showIconPicker = false;
  }
}
