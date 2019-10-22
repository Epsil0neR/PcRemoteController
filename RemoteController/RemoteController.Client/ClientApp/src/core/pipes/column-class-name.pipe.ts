import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'columnClassName'
})
export class ColumnClassNamePipe implements PipeTransform {

  transform(value: number): string {
    if (typeof value !== 'number' || isNaN(value) || value <= 0)
      return 'col-12';

    return `col-${parseInt(<any>value, 10)}`;
  }

}
