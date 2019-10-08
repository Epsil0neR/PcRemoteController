import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'rc-volume-control',
  templateUrl: './volume-control.component.html',
  styleUrls: ['./volume-control.component.css']
})
export class VolumeControlComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @HostListener('click') onClick(){
    console.log('volume-control: click');
  }

}
