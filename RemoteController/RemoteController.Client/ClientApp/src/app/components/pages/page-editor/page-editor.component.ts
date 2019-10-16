import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PagesService } from 'src/core/services/pages.service';
import { IControl, PageDetails } from 'src/core';

@Component({
  selector: 'rc-page-editor',
  templateUrl: './page-editor.component.html',
  styleUrls: ['./page-editor.component.css']
})
export class PageEditorComponent implements OnInit {
  private sub: Subscription;
  public name: string;
  public details: PageDetails = null;
  public editControl: IControl = null;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private pagesService: PagesService
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

}
