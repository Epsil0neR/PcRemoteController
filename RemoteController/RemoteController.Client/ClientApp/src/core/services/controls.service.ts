import { Injectable, Type, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { IControlViewer } from '../models/IControlViewer';
import { IControlEditor } from '../models/IControlEditor';
import { IControl } from '../models/IControl';
import { ControlRegistration } from '../models/ControlRegistration';

@Injectable({
  providedIn: 'root'
})
export class ControlsService {

  private _registrations: ControlRegistration[] = [];

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  public register(registration: ControlRegistration) {
    if (!registration)
      throw new Error('registration is not provided.');
      if (typeof registration.name !== 'string')
      throw new Error('name parameter must be of type string.');

    if (!!this._registrations.find(x => x.name === registration.name))
      throw new Error('name already in use.');

    if (typeof registration.title !== 'string' || registration.title.trim().length === 0)
      throw new Error('title parameter must be non whitespace string.');

    this._registrations.push(registration);
  }

  public views(ref: ViewContainerRef, items: IControl[]): IControlViewer[] {
    if (!ref || !items)
      return [];

    ref.clear();
    const rv = [];
    items.forEach(item => {
      const control = this.generateView(ref, item);
      if (!!control)
        rv.push(control);
    });

    return rv;
  }

  public view(ref: ViewContainerRef, item: IControl): IControlViewer {
    if (!ref || !item)
      return null;

    ref.clear();
    const control = this.generateView(ref, item);
    return control;
  }

  private generateView(ref: ViewContainerRef, item: IControl): IControlViewer {
    if (!ref || !item)
      return null;

    const r = this._registrations.find(x => x.name === item.name);
    if (!r)
      return null;

    const f = this.componentFactoryResolver.resolveComponentFactory(r.viewType);
    const c = ref.createComponent(f);
    const control = c.instance;

    control.load(item);
    return control;
  }

  public editors(ref: ViewContainerRef, items: IControl[]): IControlEditor[] {
    if (!ref || !items)
      return [];

    const rv = [];
    items.forEach(item => {
      const control = this.generateEditor(ref, item);
      if (!!control)
        rv.push(control);
    });

    return rv;
  }

  public editor(ref: ViewContainerRef, item: IControl): IControlEditor {
    if (!ref || !item)
      return null;

    ref.clear();
    const control = this.generateEditor(ref, item);
    return control;
  }

  private generateEditor(ref: ViewContainerRef, item: IControl): IControlEditor {
    if (!ref || !item)
      return null;

    const r = this._registrations.find(x => x.name === item.name);
    if (!r)
      return null;

    const f = this.componentFactoryResolver.resolveComponentFactory(r.editType);
    const c = ref.createComponent(f);
    const control = c.instance;

    control.load(item);
    return control;
  }


  /**
   * Gets a list avaiable registrations.
   *
   * @returns {{ title: string, name: string }[]}
   * @memberof ControlsService
   */
  public getAvailable(): { title: string, name: string }[] {
    return this._registrations.map(x => ({ title: x.title, name: x.name }));
  }
}
