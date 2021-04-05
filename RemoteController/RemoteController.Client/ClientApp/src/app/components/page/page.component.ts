import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PageDetails, PagesService, WakeLockService } from 'src/core';

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

  constructor(
    private route: ActivatedRoute,
    private pagesService: PagesService,
    private router: Router,
    private wakeLockService: WakeLockService
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(async params => {
      this.name = params['name'];

      const details = this.pagesService.details(this.name);
      if (details === null) {
        console.warn('Page %o not found. Navigating to home...', this.name);
        this.router.navigate(['/']);
      } else {
        this.details = details;

        if (details.wakeLock) {
          await this.wakeLockService.lock();
        }
      }
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();

    if (this.details?.wakeLock)
      this.wakeLockService.releaseLock();
  }
}
