import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ControlHostDirective } from 'src/app/directives/control-host/control-host.directive';
import { PageDetails, PagesService, ControlsService } from 'src/core';

/**
 * Represents page with controls and listeners.
 * User will navigate in site via this pages.
 */
@Component({
  selector: 'rc-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit, OnDestroy {
  private sub: Subscription;
  public name: string;
  public details: PageDetails = null;

  @ViewChild(ControlHostDirective, { static: true }) host: ControlHostDirective;

  constructor(
    private route: ActivatedRoute,
    private pagesService: PagesService,
    private router: Router,
    private controlsService: ControlsService
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.name = params['name'];

      const details = this.pagesService.details(this.name);
      if (details === null) {
        console.log('Page %o not found. Navigating to home...', this.name);
        this.router.navigate(['/']);
      } else {
        this.details = details;
        this.loadComponents(details);
      }
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  loadComponents(details: PageDetails) {
    const ref = this.host.viewContainerRef;
    ref.clear();
    if (details instanceof PageDetails === false)
      return;

    this.controlsService.views(ref, details.controls);
  }
}
