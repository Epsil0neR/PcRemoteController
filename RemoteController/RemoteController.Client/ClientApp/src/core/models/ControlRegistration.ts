import { Type } from '@angular/core';
import { IControlViewer } from './IControlViewer';
import { IControlEditor } from './IControlEditor';

export interface ControlRegistration {
  name: string;
  title: string;
  viewType: Type<IControlViewer>;
  editType: Type<IControlEditor>;
}
