import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { isNumber } from 'util';

@Component({
  selector: 'rc-control-column-editor',
  templateUrl: './control-column-editor.component.html',
  styleUrls: ['./control-column-editor.component.css']
})
export class ControlColumnEditorComponent implements OnInit, OnDestroy {
  private _value: number = 1;
  private _min: number = 1;
  private _max: number = 12;
  private initialized = false;

  /**
   * Columns count
   */
  get value() {
    return this._value;
  }
  /**
   * Columns count
   */
  @Input()
  set value(v) {
    v = parseInt(<any>v, 10);
    if (isNaN(v) || v < this.min) {
      v = this.min;
    } else if (v > this.max)
      v = this.max;

    this._value = v;
    if (this.initialized)
      this.valueChange.emit(v);
    console.log('Value set: ', v);
  }
  @Output() valueChange = new EventEmitter<number>();

  get min() {
    return this._min;
  }
  set min(v: number) {
    if (typeof v !== 'number') {
      v = parseInt(<any>v, 10);
    }
    if (isNaN(v))
      return;

    this._min = v;
    this.value = this.value; // In case value outside boudaries
  }

  get max() {
    return this._max;
  }
  set max(v: number) {
    if (typeof v !== 'number') {
      v = parseInt(<any>v, 10);
    }
    if (isNaN(v))
      return;

    this._max = v;
    this.value = this.value; // In case value outside boudaries
  }

  constructor() { }

  ngOnInit() {
    this.initialized = true;
  }

  ngOnDestroy() {
    this.initialized = false;
  }
}
