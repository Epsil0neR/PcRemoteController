import { Input } from '@angular/core';
import { ControlType, IControl } from 'src/core';

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

  /**
   * Control type that component supports.
   */
  protected abstract GetControlType(): ControlType;

  public load(data: IControl): void {
    if (!data)
      throw new Error('Data must be provided');

    if (data.type !== this.GetControlType())
      throw new Error('Data is not supported by this component');

    this.col = data.col;
  }
}
