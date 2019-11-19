import { Component, OnInit, OnDestroy } from '@angular/core';
import { allIcons } from 'src/core/utils/findIcon';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { IconsFilterPipe } from 'src/core/pipes/IconsFilterPipe';

@Component({
  selector: 'rc-icon-selector',
  templateUrl: './icon-selector.component.html',
  styleUrls: ['./icon-selector.component.css']
})
export class IconSelectorComponent
  implements OnInit, OnDestroy {

  private _allIcons: IconDefinition[];
  private _filter: string = '';

  public icons: IconDefinition[] = [];

  public get filter() {
    return this._filter;
  }

  public set filter(value: string) {
    this._filter = !!value ? value : '';
    this.filterItems();
  }

  constructor(private filterPipe: IconsFilterPipe) { }

  ngOnInit() {
    this._allIcons = allIcons();
    this.filterItems();
  }

  ngOnDestroy(): void {
    this._allIcons = null;
    this.filterItems();
  }

  filterItems() {
    if (this._allIcons === null) {
      this.icons = [];
      return;
    }

    this.icons = this.filterPipe.transform(this._allIcons, this.filter);
  }
}
