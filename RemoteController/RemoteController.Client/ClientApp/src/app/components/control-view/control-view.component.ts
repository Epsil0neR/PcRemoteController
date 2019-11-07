import { Component, ViewChild, Input } from '@angular/core';
import { ControlHostDirective } from 'src/app/directives/control-host/control-host.directive';
import { IControl, ControlsService } from 'src/core';

@Component({
  selector: 'rc-control-view',
  templateUrl: './control-view.component.html',
  styleUrls: ['./control-view.component.css']
})
export class ControlViewComponent {

  @ViewChild(ControlHostDirective, { static: true }) host: ControlHostDirective;

  private _control: IControl = null;

  get control(): IControl {
    return this._control;
  }

  @Input()
  set control(value: IControl) {
    this._control = !!value ? value : null;
    this.load();
  }

  @Input()
  public forceFullWidth: boolean = true;

  constructor(private controlsService: ControlsService) { }

  private load() {
    const ref = this.host.viewContainerRef;
    const viewer = this.controlsService.view(ref, this.control);
    viewer.forceFullWidth = this.forceFullWidth;
  }
}
