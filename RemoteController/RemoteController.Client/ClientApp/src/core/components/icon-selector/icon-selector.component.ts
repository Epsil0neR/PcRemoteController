import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
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
  private _showEmpty: boolean = false;

  public icons: IconDefinition[] = [];

  public get showEmpty(): boolean {
    return this._showEmpty;
  }

  @Input()
  public set showEmpty(value: boolean) {
    if (typeof value === 'boolean') {
      this._showEmpty = value;
    } else if (typeof value === 'string') {
      this._showEmpty = (<string>value).toLowerCase() === 'true';
    } else {
      this._showEmpty = !!value;
    }
  }

  @Input()
  public icon: IconDefinition = null;

  @Output()
  public iconChange = new EventEmitter<IconDefinition>();

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

  selectIcon(icon: IconDefinition) {
    this.iconChange.emit(!!icon ? icon : null);
  }
}
