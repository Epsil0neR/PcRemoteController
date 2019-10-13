import { Component, OnDestroy, OnInit } from '@angular/core';
import { PagesService } from '../services/pages.service';
import { IPage } from '../models/IPage';
import { Subscription } from 'rxjs';
import { WebSocketService } from '../services/web-socket.service';

@Component({
  selector: 'rc-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[];
  isExpanded = false;
  pages: IPage[];
  isConnected: boolean = false;

  constructor(private pagesService: PagesService, private service: WebSocketService) {
    this.subscriptions = [];
  }

  ngOnInit() {
    this.subscriptions.push(this.pagesService.pages.subscribe(value => {
      this.pages = value;
      console.log(value);
    }));
    this.subscriptions.push(this.service.isConnected.subscribe(value => this.isConnected = value));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(x => x.unsubscribe());
  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
  connect() {
    if (!this.service.isConnected.getValue()) {
      console.log('Connect!');
      this.service.open();

    } else {
      console.log('Disconnect!');
      this.service.close();

    }
  }
}
