import { Component, OnInit } from '@angular/core';
import { IControlViewer, IControl } from 'src/core';

@Component({
  selector: 'rc-key',
  templateUrl: './key.component.html',
  styleUrls: ['./key.component.css']
})
export class KeyComponent implements IControlViewer, OnInit {

  constructor() { }

  ngOnInit() {
  }

  load(data: IControl): boolean {
    throw new Error('Method not implemented.');
  }
}
