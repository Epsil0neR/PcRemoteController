import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IControl } from 'src/app/models/IControl';
import { ControlType } from 'src/app/models/ControlType';
import { EnumToArrayPipe } from 'src/app/pipes/enum-to-array.pipe';

@Component({
  selector: 'rc-control-editor',
  templateUrl: './control-editor.component.html',
  styleUrls: ['./control-editor.component.css']
})
export class ControlEditorComponent implements OnInit {
  public controlType: ControlType = ControlType.None;
  private _control: IControl;

  public controlTypes: { value: number; name: string; }[];

  get control(): IControl {
    return this._control;
  }
  @Input() set control(value: IControl) {
    if (!!this._control) {
      // TODO: Unload data.
    }

    this._control = value;
    this.controlChange.emit(this.control);

    if (!!this._control) {
      // TODO: Prepare data.
      this.controlType = this._control.type;
      const data = this.generateControls();
    }
  }
  @Output() public controlChange = new EventEmitter<IControl>();

  constructor(private enumPipe: EnumToArrayPipe) {
    this.controlTypes = enumPipe.transform(ControlType).filter(x => x.value !== ControlType.None);
  }

  ngOnInit() {
  }

  private generateControls(): { [type: number]: IControl } {
    const rv = {};

    rv[ControlType.Key] = <IControl>{
      type: ControlType.Key,
      col: 12
    };
    rv[ControlType.Volume] = <IControl>{
      type: ControlType.Volume,
      col: 12
    };
    rv[ControlType.Output] = <IControl>{
      type: ControlType.Output,
      col: 12
    };
    rv[ControlType.Command] = <IControl>{
      type: ControlType.Command,
      col: 12
    };
    rv[ControlType.FileSystem] = <IControl>{
      type: ControlType.FileSystem,
      col: 12
    };
    rv[ControlType.Info] = <IControl>{
      type: ControlType.Info,
      col: 12
    };

    return rv;
  }
}
