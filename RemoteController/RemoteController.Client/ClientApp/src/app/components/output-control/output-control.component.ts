import { Component, OnInit } from '@angular/core';
import { BaseControlComponent } from '../BaseControlComponent';

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

}
