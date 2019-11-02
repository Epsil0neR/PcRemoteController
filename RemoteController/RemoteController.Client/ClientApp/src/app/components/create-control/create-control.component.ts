import { Component, OnInit } from '@angular/core';
import { ControlsService } from 'src/core';

@Component({
  selector: 'rc-create-control',
  templateUrl: './create-control.component.html',
  styleUrls: ['./create-control.component.css']
})
export class CreateControlComponent implements OnInit {
  controlTypes: { title: string; name: string; }[];
  selectedControlType: string = null;

  constructor(public controlsService: ControlsService) { }

  ngOnInit() {
    this.controlTypes = this.controlsService.getAvailable();
  }

  test(data) {
    console.log('Test:', data);
  }
}
