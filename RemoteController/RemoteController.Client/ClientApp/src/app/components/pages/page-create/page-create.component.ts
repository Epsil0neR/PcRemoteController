import { Component, OnInit } from '@angular/core';
import { PagesService } from 'src/core';

@Component({
  selector: 'rc-page-create',
  templateUrl: 'page-create.component.html',
  styleUrls: ['./page-create.component.css']
})

export class PageCreateComponent implements OnInit {
  title = '';

  constructor(private pagesService: PagesService) { }

  ngOnInit() { }

  create() {
    console.log('Create: ', this);
    if (!this.title || this.title.trim().length === 0) {
      return;
    }

    const details = this.pagesService.create(this.title);
    console.log('Created: ', details);

  }
}
