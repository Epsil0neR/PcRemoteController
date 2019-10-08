import { Component, OnDestroy } from '@angular/core';
import { PagesService } from '../services/_exports';
import { IPage } from '../models/_exports';
import { Subscription } from 'rxjs';

@Component({
  selector: 'rc-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnDestroy {
  private subscription: Subscription;
  isExpanded = false;
  pages: IPage[];

  constructor(private pagesService: PagesService) {
    this.subscription = this.pagesService.pages.subscribe(value => {
      this.pages = value;
      console.log(value);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
