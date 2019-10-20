import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { IControl } from 'src/core';
import { ControlHostDirective } from 'src/app/directives/control-host/control-host.directive';

@Component({
  selector: 'rc-control-editor',
  templateUrl: './control-editor.component.html',
  styleUrls: ['./control-editor.component.css']
})
export class ControlEditorComponent implements OnInit {
  private _control: IControl = null;
  public data: IControl = null;

  @ViewChild(ControlHostDirective, { static: true }) host: ControlHostDirective;

  get control() {
    return this._control;
  }
  @Input()
  set control(value: IControl) {
    if (!value)
      value = null;

    this._control = value;
    this.data = Object.assign({}, value);
  }

  @Input() canChangeType: boolean = false;

  @Output() cancel = new EventEmitter(true);
  @Output() save = new EventEmitter<IControl>(true);

  constructor() { }

  ngOnInit() {
  }

  public load(control: IControl) {
    console.log('Loading control editor for', control);
    this.control = control;
  }
}
