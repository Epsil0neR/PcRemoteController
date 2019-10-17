import { Component, OnInit } from '@angular/core';
import { ControlType, IControl, BaseControlComponent } from 'src/core';

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
    this.col = data.col;
    throw new Error('Obsolete');
  }
}
