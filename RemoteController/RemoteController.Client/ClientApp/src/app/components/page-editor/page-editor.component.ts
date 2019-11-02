import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IControl, PagesService, PageDetails } from 'src/core';
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
  public showCreateControl = false;

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
    if (!data || !data.orig)
      return;

    const ind = this.controls.indexOf(data.orig);
    if (ind < 0) {
      console.log('Failed to update control - origin not found.', data.orig);
      return;
    }

    this.controls[ind] = data.changed;
    console.log('Control updated:', data.changed, this.controls);
  }

  deleteControl(control: IControl) {
    this.show = true;
    if (!control)
      return;

    const ind = this.controls.indexOf(control);
    if (ind < 0) {
      console.log('Failed to delete control - origin not found', control);
      return;
    }

    this.controls.splice(ind, 1);
    console.log('Control removed: ', control, this.controls);
  }

  openControlEditor(control: IControl) {
    this.show = false;
    this.controlEditor.load(control);
  }

  save() {
    const details: PageDetails = new PageDetails();
    details.controls = this.controls;
    details.title = this.title;
    this.pagesService.update(this.name, details);

    this.navigateToPage();
  }

  navigateToPage() {
    this.router.navigate(['/', 'p', this.name]);
  }

  addControl(){
    this.showCreateControl = true;
  }
}
