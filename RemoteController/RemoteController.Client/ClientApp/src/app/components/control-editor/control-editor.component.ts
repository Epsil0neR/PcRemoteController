import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { IControl, ControlsService, IControlEditor } from 'src/core';
import { ControlHostDirective } from 'src/app/directives/control-host/control-host.directive';

@Component({
  selector: 'rc-control-editor',
  templateUrl: './control-editor.component.html',
  styleUrls: ['./control-editor.component.css']
})
export class ControlEditorComponent implements OnInit {
  private _control: IControl = null;
  private _editor: IControlEditor = null;
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
  @Output() delete = new EventEmitter<IControl>(true);

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

    const editors = this.controlsService.editors(ref, [this.data]);
    this._editor = editors.length > 0 && !!editors[0] ? editors[0] : null;
  }

  submit(save: boolean) {
    // tslint:disable-next-line: triple-equals
    save = save == true;

    const c = this.control;
    this.control = null;
    if (!save) {
      this.cancel.emit();
      return;
    }

    console.log(this._editor);
    const data = !!this._editor ? this._editor.save() : null;
    this.save.emit({ orig: c, changed: data });
  }

  deleteAction() {
    if (!this.control)
      return;

    const c = this.control;
    this.control = null;
    this.delete.emit(c);
  }
}
