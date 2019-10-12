import { Component, OnInit, HostListener } from '@angular/core';
import { BaseControlComponent } from '../BaseControlComponent';
import { ControlType } from 'src/app/models/ControlType';
import { IControl } from 'src/app/models/IControl';

@Component({
  selector: 'rc-volume-control',
  templateUrl: './volume-control.component.html',
  styleUrls: ['./volume-control.component.css']
})
export class VolumeControlComponent
  extends BaseControlComponent
  implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

  @HostListener('click') onClick() {
    console.log('volume-control: click');
  }

  protected GetControlType(): ControlType {
    return ControlType.Volume;
  }

  public load(data: IControl) {
    super.load(data);
  }

}
