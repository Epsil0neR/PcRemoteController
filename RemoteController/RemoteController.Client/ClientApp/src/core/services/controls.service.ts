import { Injectable, Type } from '@angular/core';
import { IControlViewer } from '../models/IControlViewer';
import { IControlEditor } from '../models/IControlEditor';

@Injectable({
  providedIn: 'root'
})
export class ControlsService {

  private _registrations: ControlRegistration[] = [];

  constructor() { }

  public register(name: string, viewType: Type<IControlViewer>, editType: Type<IControlEditor>) {
    if (typeof name !== 'string')
      throw new Error('name parameter must be of type string.');

    if (!!this._registrations.find(x => x.name === name))
      throw new Error('name already in use.');

    const r: ControlRegistration = { name, viewType, editType };
    this._registrations.push(r);
  }
}

interface ControlRegistration {
  name: string;
  viewType: Type<IControlViewer>;
  editType: Type<IControlEditor>;
}
