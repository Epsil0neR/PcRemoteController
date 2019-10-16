import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PageDetails } from 'src/app/models/PageDetails';
import { PagesService } from 'src/app/services/pages.service';
import { IControl } from 'src/app/models/IControl';

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
