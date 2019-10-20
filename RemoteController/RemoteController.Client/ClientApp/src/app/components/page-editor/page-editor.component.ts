import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IControl, PagesService } from 'src/core';
import { ControlEditorComponent } from '../control-editor/control-editor.component';

@Component({
  selector: 'rc-page-editor',
  templateUrl: './page-editor.component.html',
  styleUrls: ['./page-editor.component.css'],
})
export class PageEditorComponent implements OnInit {
  private sub: Subscription;
  public name: string;
  public title: string = null;
  public controls: IControl[] = [];
  public show = true;

  @ViewChild(ControlEditorComponent, { static: true }) controlEditor: ControlEditorComponent;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private pagesService: PagesService,
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
        this.controls = [...details.controls];
      }
    });
    this.sub.unsubscribe();
  }

  updateControl(data?: { orig: IControl, changed: IControl }) {
    this.show = true;
    if (!data)
      return;

    const ind = this.controls.indexOf(data.orig);
    if (ind < 0) {
      console.log('Failed to update control - origin not found.');
      return;
    }

    this.controls[ind] = data.changed;
    console.log(this.controls);
  }

  openControlEditor(control: IControl) {
    this.show = false;
    this.controlEditor.load(control);
  }
}
