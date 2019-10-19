import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IControl } from 'src/core';

@Component({
  selector: 'rc-control-editor',
  templateUrl: './control-editor.component.html',
  styleUrls: ['./control-editor.component.css']
})
export class ControlEditorComponent implements OnInit {

  @Input() control: IControl = null;
  @Input() canChangeType: boolean = false;

  @Output() cancel = new EventEmitter(true);
  @Output() save = new EventEmitter<IControl>(true);

  constructor() { }

  ngOnInit() {
  }

}
