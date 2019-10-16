import { Component, OnInit } from '@angular/core';
import { IControlEditor, IControl } from 'src/core';

@Component({
  selector: 'rc-key-editor',
  templateUrl: './key-editor.component.html',
  styleUrls: ['./key-editor.component.css']
})
export class KeyEditorComponent implements IControlEditor, OnInit {
  constructor() { }

  ngOnInit() {
  }

  load(data: IControl): boolean {
    throw new Error('Method not implemented.');
  }
  save(): IControl {
    throw new Error('Method not implemented.');
  }
}
