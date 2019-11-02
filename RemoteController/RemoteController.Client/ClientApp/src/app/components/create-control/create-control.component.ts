import { Component, OnInit } from '@angular/core';
import { ControlsService } from 'src/core';

@Component({
  selector: 'rc-create-control',
  templateUrl: './create-control.component.html',
  styleUrls: ['./create-control.component.css']
})
export class CreateControlComponent implements OnInit {

  constructor(public controlsService: ControlsService) { }

  ngOnInit() {
  }

}
