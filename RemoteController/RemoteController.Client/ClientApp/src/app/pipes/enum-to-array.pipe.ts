import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enumToArray'
})
export class EnumToArrayPipe implements PipeTransform {

  transform(value): { value: number, name: string }[] {
    return Object
      .keys(value)
      .filter(e => !isNaN(+e) && typeof value[e] === 'string')
      .map(o => ({ value: +o, name: value[o] }));
  }

}
