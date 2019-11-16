import { Component, OnInit, OnDestroy } from '@angular/core';
import { allIcons } from 'src/core/utils/findIcon';

@Component({
  selector: 'rc-icon-selector',
  templateUrl: './icon-selector.component.html',
  styleUrls: ['./icon-selector.component.css']
})
export class IconSelectorComponent
  implements OnInit, OnDestroy {

  icons: any;
  filter: string = '';

  constructor() { }

  ngOnInit() {
    this.icons = allIcons();
  }

  ngOnDestroy(): void {
    this.icons = null;
  }
}
