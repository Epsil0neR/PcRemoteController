import { Component, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { ControlHostDirective } from 'src/app/directives/control-host/control-host.directive';
import { IControl, ControlsService } from 'src/core';

@Component({
  selector: 'rc-control-editor-view',
  templateUrl: './control-editor-view.component.html',
  styleUrls: ['./control-editor-view.component.css']
})
export class ControlEditorViewComponent {

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

  @Output()
  public click = new EventEmitter(true);

  constructor(private controlsService: ControlsService) { }

  private load() {
    const ref = this.host.viewContainerRef;
    this.controlsService.view(ref, this.control);
  }

  private onClick() {
    this.click.emit();
  }
}
