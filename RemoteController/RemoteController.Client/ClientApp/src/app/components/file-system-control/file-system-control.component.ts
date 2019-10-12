import { Component, OnInit } from '@angular/core';
import { BaseControlComponent } from '../BaseControlComponent';
import { ControlType } from 'src/app/models/ControlType';
import { IControl } from 'src/app/models/IControl';

@Component({
  selector: 'rc-file-system-control',
  templateUrl: './file-system-control.component.html',
  styleUrls: ['./file-system-control.component.css']
})
export class FileSystemControlComponent
  extends BaseControlComponent
  implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

  protected GetControlType(): ControlType {
    return ControlType.FileSystem;
  }

  public load(data: IControl) {
    super.load(data);
  }

}
