import { Component, Input, Output, EventEmitter, HostBinding } from '@angular/core';
import { IControl, CoreModule } from 'src/core';
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
    this.setClass();
  }

  @Output()
  public openEditor = new EventEmitter(true);

  @HostBinding('class') class;


  private setClass() {
    this.class = 'editor ' + (!this.control ? '' : this.columnClassName.transform(this.control.col));
  }

  private onClick() {
    this.openEditor.emit();
  }

  constructor(private columnClassName: ColumnClassNamePipe) {
    this.setClass();
  }
}
