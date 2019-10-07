import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import * as Services from '../../services/_exports';
import * as Models from '../../Models/_exports';

/**
 * Represents page with controls and listeners.
 * User will navigate in site via this pages.
 */
@Component({
    selector: 'page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit, OnDestroy {
    private sub: Subscription;
    private name: string;
    private items = [];

    constructor(
        private route: ActivatedRoute,
        private pagesService: Services.PagesService,
        private router: Router
    ) { }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.name = params['name'];

            let page = this.pagesService.details(this.name);
            if (page === null) {
                console.log('Page %o not found. Navigating to home...', this.name);
                this.router.navigate(["/"]);
            }
        });
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

}
