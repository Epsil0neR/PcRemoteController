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

  public register(name: string, viewType: Type<IControlViewer>, editType: Type<IControlEditor>) {
    if (typeof name !== 'string')
      throw new Error('name parameter must be of type string.');

    if (!!this._registrations.find(x => x.name === name))
      throw new Error('name already in use.');

    const r: ControlRegistration = { name, viewType, editType };
    this._registrations.push(r);
  }

  public views(ref: ViewContainerRef, items: IControl[]) {
    if (!ref || !items)
      return;

    items.forEach(item => {
      const r = this._registrations.find(x => x.name === item.name);
      if (!r)
        return;

      const f = this.componentFactoryResolver.resolveComponentFactory(r.viewType);
      const c = ref.createComponent(f);
      const control = c.instance;

      control.load(item);
    });
  }

  public editors(ref: ViewContainerRef, items: IControl[]) {
    if (!ref || !items)
      return;

    items.forEach(item => {
      const r = this._registrations.find(x => x.name === item.name);
      if (!r)
        return;

      const f = this.componentFactoryResolver.resolveComponentFactory(r.editType);
      const c = ref.createComponent(f);
      const control = c.instance;

      control.load(item);
    });
  }

}

interface ControlRegistration {
  name: string;
  viewType: Type<IControlViewer>;
  editType: Type<IControlEditor>;
}
