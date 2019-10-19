import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IControl, PageDetails, PagesService } from 'src/core';

@Component({
  selector: 'rc-page-editor',
  templateUrl: './page-editor.component.html',
  styleUrls: ['./page-editor.component.css']
})
export class PageEditorComponent implements OnInit {
  private sub: Subscription;
  public name: string;
  public editControl: IControl = null;
  public title: string = null;
  public controls: IControl[] = [];

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
        console.warn('Page editor could not find %o. Navigating to home...', this.name);
        this.router.navigate(['/']);
      } else {
        this.title = details.title;
        this.controls = details.controls;
      }
    });
    this.sub.unsubscribe();
  }
}
