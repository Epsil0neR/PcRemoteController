import { Component, OnInit } from '@angular/core';
import { BaseControlComponent } from '../BaseControlComponent';

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

}
