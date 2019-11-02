import { Component, OnInit, ViewChild, Output, EventEmitter, Input } from '@angular/core';
import { ControlsService, IControl } from 'src/core';
import { ControlEditorComponent } from '../control-editor/control-editor.component';

@Component({
  selector: 'rc-create-control',
  templateUrl: './create-control.component.html',
  styleUrls: ['./create-control.component.css']
})
export class CreateControlComponent implements OnInit {
  controlTypes: { title: string; name: string; }[];

  @ViewChild(ControlEditorComponent, { static: true })
  public editor: ControlEditorComponent;

  @Input() type: string = null;
  @Output() cancel = new EventEmitter(true);
  @Output() submit = new EventEmitter<IControl>(true);

  constructor(public controlsService: ControlsService) { }

  ngOnInit() {
    this.controlTypes = this.controlsService.getAvailable();
  }

  typeChanged(name: string) {
    this.editor.load({ name: name, col: 12 });
  }

  onSave(data: { orig: IControl, changed: IControl }) {
    if (!data || !data.changed)
      return;

    this.submit.emit(data.changed);
  }

  onCancel() {
    this.cancel.emit();
  }
}
