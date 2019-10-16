import { Component, OnInit, OnDestroy } from '@angular/core';
import { BaseControlComponent } from '../../BaseControlComponent';
import { WebSocketService, ControlType, IControl } from 'src/core';

@Component({
  selector: 'rc-output-control',
  templateUrl: './output-control.component.html',
  styleUrls: ['./output-control.component.css']
})
export class OutputControlComponent
  extends BaseControlComponent
  implements OnInit, OnDestroy {

  constructor(private service: WebSocketService) {
    super();
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  protected GetControlType(): ControlType {
    return ControlType.Output;
  }

  public load(data: IControl) {
    super.load(data);
  }

}
