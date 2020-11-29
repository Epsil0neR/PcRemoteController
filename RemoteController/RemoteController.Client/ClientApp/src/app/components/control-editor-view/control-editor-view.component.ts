import { Component, Input, Output, EventEmitter, HostBinding } from '@angular/core';
import { IControl } from 'src/core';
import { ColumnClassNamePipe } from 'src/core';

@Component({
  selector: 'rc-control-editor-view',
  templateUrl: './control-editor-view.component.html',
  styleUrls: ['./control-editor-view.component.css']
})
export class ControlEditorViewComponent {
  private _control: IControl = null;

  get control(): IControl {
    return this._control;
  }

  @Input()
  set control(value: IControl) {
    this._control = !!value ? value : null;
  }

  @Output()
  public openEditor = new EventEmitter(true);

  public onClick() {
    this.openEditor.emit();
  }
}
