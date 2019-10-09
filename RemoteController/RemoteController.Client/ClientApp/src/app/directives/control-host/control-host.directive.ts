import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[rcControlHost]'
})
export class ControlHostDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
