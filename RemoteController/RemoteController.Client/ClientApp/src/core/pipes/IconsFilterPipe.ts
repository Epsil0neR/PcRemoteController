import { PipeTransform, Pipe } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

@Pipe({
  name: 'icons_filter'
})
export class IconsFilterPipe implements PipeTransform {
  transform(value: IconDefinition[], filter: string, ...args: any[]) {
    filter = !!filter ? filter.toLowerCase() : null;
    const rv = filter === null
      ? value
      : value.filter(x => x.iconName.indexOf(filter) >= 0);

    return rv;
  }
}
