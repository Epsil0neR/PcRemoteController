import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import * as Services from '../../services/_exports';
import * as Models from '../../Models/_exports';
import { PageDetails } from '../../Models/_exports';

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
    private name: string;
    private items = [];
    public details: PageDetails = null;

    constructor(
        private route: ActivatedRoute,
        private pagesService: Services.PagesService,
        private router: Router
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
            }
        });
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

}
