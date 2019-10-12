import { Component, OnInit } from '@angular/core';
import { BaseControlComponent } from '../BaseControlComponent';
import { ControlType } from 'src/app/models/ControlType';
import { IControl } from 'src/app/models/IControl';

@Component({
  selector: 'rc-output-control',
  templateUrl: './output-control.component.html',
  styleUrls: ['./output-control.component.css']
})
export class OutputControlComponent
  extends BaseControlComponent
  implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

  protected GetControlType(): ControlType {
    return ControlType.Output;
  }

  public load(data: IControl) {
    super.load(data);
  }

}
