import { Component, OnInit, OnDestroy, ComponentFactoryResolver, ViewChild, Type } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PageDetails } from 'src/app/models/PageDetails';
import { ControlHostDirective } from 'src/app/directives/control-host/control-host.directive';
import { PagesService } from 'src/app/services/pages.service';
import { ControlType } from 'src/app/models/ControlType';
// import { KeyControlComponent } from '../key-control/key-control.component';
// import { VolumeControlComponent } from '../volume-control/volume-control.component';

// export const ControlTypeMapping = new Map<ControlType, Type<unknown>>();
// ControlTypeMapping.set(ControlType.Key, KeyControlComponent);
// ControlTypeMapping.set(ControlType.Volume, VolumeControlComponent);

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
    const controlType = ControlType.Key;
    // const t = ControlTypeMapping.get(controlType);
    // const factory = this.componentFactoryResolver.resolveComponentFactory(t);
    // const ref = this.host.viewContainerRef;
    // ref.clear();

    // const component = ref.createComponent(factory);
  }
}
