import { Component, OnInit } from '@angular/core';
import { BaseControlComponent } from '../BaseControlComponent';
import { ControlType } from 'src/app/models/ControlType';
import { IControl } from 'src/app/models/IControl';

@Component({
  selector: 'rc-command-control',
  templateUrl: './command-control.component.html',
  styleUrls: ['./command-control.component.css']
})
export class CommandControlComponent
  extends BaseControlComponent
  implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

  protected GetControlType(): ControlType {
    return ControlType.Command;
  }

  public load(data: IControl) {
    super.load(data);
  }
}
