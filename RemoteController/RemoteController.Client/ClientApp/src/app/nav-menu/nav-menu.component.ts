import { Component } from '@angular/core';
import { PagesService } from '../services/_exports';
import { IPage } from '../models/_exports';

@Component({
  selector: 'rc-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;
  pages: IPage[];

  constructor(private pagesService: PagesService) {
    this.pages = pagesService.list();
  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
