import { Input, HostBinding } from '@angular/core';

export abstract class BaseControlComponent {
  private _col: number = 4;
  protected colMax: number = 12;
  protected colMin: number = 1;

  public get col(): number {
    return this._col;
  }
  @Input('col')
  public set col(v: number) {
    if (typeof v !== 'number')
      v = <any>parseInt(<any>v, 10);
    if (<number>v !== 0 && !v)
      return;
    if (v < this.colMin)
      v = this.colMin;
    if (v > this.colMax)
      v = this.colMax;
    this._col = parseInt(<any>v, 10);
    this.colClass = `col-${this._col}`;
  }

  @Input()
  public colClass: string;
}
