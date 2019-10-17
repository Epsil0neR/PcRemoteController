import { Component, OnInit } from '@angular/core';
import { IControlViewer, IControl } from 'src/core';
import { IKeyControl } from '../Models/IKeyControl';

@Component({
  selector: 'rc-key',
  templateUrl: './key.component.html',
  styleUrls: ['./key.component.css']
})
export class KeyComponent implements IControlViewer, OnInit {

  constructor() { }

  ngOnInit() {
  }

  load(data: IKeyControl): boolean {
    // TODO
    return true;
  }
}
