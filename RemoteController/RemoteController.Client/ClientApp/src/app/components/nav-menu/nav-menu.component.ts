import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Subscription } from 'rxjs';
import { WebSocketService, PagesService, IPage } from 'src/core';

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

  constructor(
    private pagesService: PagesService,
    private service: WebSocketService,
    private renderer: Renderer2) {
    this.subscriptions = [];
  }

  ngOnInit() {
    this.subscriptions.push(this.pagesService.pages.subscribe(value => this.pages = value));
    this.subscriptions.push(this.service.isConnected.subscribe(value => this.isConnected = value));

    const sub = new Subscription(this.renderer.listen('document', 'click', (evt) => {
      if (this.isExpanded)
        this.isExpanded = false;
    }));
    this.subscriptions.push(sub);
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
