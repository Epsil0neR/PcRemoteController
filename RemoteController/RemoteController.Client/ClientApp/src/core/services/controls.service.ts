import { Injectable, Type, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { IControlViewer } from '../models/IControlViewer';
import { IControlEditor } from '../models/IControlEditor';
import { IControl } from '../models/IControl';

@Injectable({
  providedIn: 'root'
})
export class ControlsService {

  private _registrations: ControlRegistration[] = [];

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  public register(name: string, title: string, viewType: Type<IControlViewer>, editType: Type<IControlEditor>) {
    if (typeof name !== 'string')
      throw new Error('name parameter must be of type string.');

    if (!!this._registrations.find(x => x.name === name))
      throw new Error('name already in use.');

    if (typeof title !== 'string' || title.trim().length === 0)
      throw new Error('title parameter must be non whitespace string.');

    const r: ControlRegistration = { name, title, viewType, editType };
    this._registrations.push(r);
  }

  public views(ref: ViewContainerRef, items: IControl[]): IControlViewer[] {
    if (!ref || !items)
      return [];

    const rv = [];
    items.forEach(item => {
      const r = this._registrations.find(x => x.name === item.name);
      if (!r)
        return;

      const f = this.componentFactoryResolver.resolveComponentFactory(r.viewType);
      const c = ref.createComponent(f);
      const control = c.instance;

      control.load(item);
      rv.push(control);
    });

    return rv;
  }

  public editors(ref: ViewContainerRef, items: IControl[]): IControlEditor[] {
    if (!ref || !items)
      return [];

    const rv = [];
    items.forEach(item => {
      const r = this._registrations.find(x => x.name === item.name);
      if (!r)
        return;

      const f = this.componentFactoryResolver.resolveComponentFactory(r.editType);
      const c = ref.createComponent(f);
      const control = c.instance;

      control.load(item);
      rv.push(control);
    });

    return rv;
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

interface ControlRegistration {
  name: string;
  title: string;
  viewType: Type<IControlViewer>;
  editType: Type<IControlEditor>;
}
