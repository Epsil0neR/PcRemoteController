import { Component, OnInit, OnDestroy, ComponentFactoryResolver, ViewChild, Type } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ControlHostDirective } from 'src/app/directives/control-host/control-host.directive';
import { KeyControlComponent } from '../../controls/key-control/key-control.component';
import { VolumeControlComponent } from '../../controls/volume-control/volume-control.component';
import { BaseControlComponent } from '../../BaseControlComponent';
import { CommandControlComponent } from '../../controls/command-control/command-control.component';
import { FileSystemControlComponent } from '../../controls/file-system-control/file-system-control.component';
import { OutputControlComponent } from '../../controls/output-control/output-control.component';
import { ControlType, PageDetails, PagesService } from 'src/core';

export const ControlTypeMapping = new Map<ControlType, Type<BaseControlComponent>>([
  [ControlType.Key, KeyControlComponent],
  [ControlType.Volume, VolumeControlComponent],
  [ControlType.Command, CommandControlComponent],
  [ControlType.FileSystem, FileSystemControlComponent],
  [ControlType.Output, OutputControlComponent]
]);

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

  @ViewChild(ControlHostDirective, { static: true }) host: ControlHostDirective;

  constructor(
    private route: ActivatedRoute,
    private pagesService: PagesService,
    private router: Router,
    private componentFactoryResolver: ComponentFactoryResolver
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
        this.loadComponents(details);
      }
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  loadComponents(details: PageDetails) {
    const ref = this.host.viewContainerRef;
    ref.clear();
    if (details instanceof PageDetails === false)
      return;

    details.controls.forEach(itm => {
      const controlType = itm.type;
      const componentType = ControlTypeMapping.get(controlType);
      const factory = this.componentFactoryResolver.resolveComponentFactory(componentType);
      const component = ref.createComponent(factory);

      const control = component.instance;
      control.load(itm);
      });
  }
}