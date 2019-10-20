import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { isNumber } from 'util';

@Component({
  selector: 'rc-control-column-editor',
  templateUrl: './control-column-editor.component.html',
  styleUrls: ['./control-column-editor.component.css']
})
export class ControlColumnEditorComponent implements OnInit, OnDestroy {
  private _value: number = 1;
  private initialized = false;

  /**
   * Columns cound
   */
  get value() {
    return this._value;
  }
  /**
   * Columns cound
   */
  @Input()
  set value(v) {
    v = parseInt(v);
    if (!isNumber(v) || isNaN(v) || v < this.min) {
      v = this.min;
    } else if (v > this.max)
      this.max;

    this._value = v;
    if (this.initialized)
      this.valueChange.emit(v);
    console.log('Value set: ', v);
  }
  @Output() valueChange = new EventEmitter<number>();

  public min: number = 1;
  public max: number = 12;

  constructor() { }

  ngOnInit() {
    this.initialized = true;
  }

  ngOnDestroy() {
    this.initialized = false;
  }
}
