import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IControl, PagesService, PageDetails } from 'src/core';
import { ControlEditorComponent } from '../control-editor/control-editor.component';
import { CreateControlComponent } from '../create-control/create-control.component';

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
  public wakeLock = false;

  @ViewChild(ControlEditorComponent, { static: true }) controlEditor: ControlEditorComponent;
  @ViewChild(CreateControlComponent, { static: true }) controlCreator: CreateControlComponent;

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
        this.wakeLock = !!details.wakeLock;
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
  }

  openControlEditor(control: IControl) {
    this.show = false;
    this.controlEditor.load(control);
  }

  save() {
    const details: PageDetails = new PageDetails();
    details.controls = this.controls;
    details.title = this.title;
    details.wakeLock = !!this.wakeLock;
    this.pagesService.update(this.name, details);

    this.navigateToPage();
  }

  delete() {
    const confirmed = confirm('Delete this page?');
    if (!confirmed)
      return;

    this.pagesService.delete(this.name);
    this.router.navigate(['/']);
  }

  navigateToPage() {
    this.router.navigate(['/', 'p', this.name]);
  }

  addControl() {
    this.controlCreator.type = null;
    this.showCreateControl = true;
  }

  hideCreateControl() {
    this.controlCreator.type = null;
    this.showCreateControl = false;
  }

  createControl(control: IControl) {
    if (!control)
      return;

    this.hideCreateControl();
    this.controls.push(control);
  }
}
