import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { IControl, ControlsService } from 'src/core';
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

  public get control() {
    return this._control;
  }
  public set control(value: IControl) {
    if (!value)
      value = null;

    this._control = value;
    this.data = !!value ? Object.assign({}, value) : null;
  }

  @Input() canChangeType: boolean = false;

  @Output() cancel = new EventEmitter(true);
  @Output() save = new EventEmitter<{ orig: IControl, changed: IControl }>(true);

  constructor(
    private controlsService: ControlsService
  ) { }

  ngOnInit() {
  }

  public load(control: IControl) {
    console.log('Loading control editor for', control);
    this.control = control;

    this.showTypedEditor();
  }

  private showTypedEditor() {
    const ref = this.host.viewContainerRef;
    ref.clear();
    if (!this.control)
      return;

    this.controlsService.editors(ref, [this.data]);
  }

  submit(data?: IControl) {
    const c = this.control;
    this.control = null;
    if (!data) {
      this.cancel.emit();
    } else {
      this.save.emit({ orig: c, changed: data });
    }
  }
}
