import { Component, OnInit } from '@angular/core';
import { BaseControlComponent } from '../BaseControlComponent';

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

}
