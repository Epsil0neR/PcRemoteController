import { Injectable } from '@angular/core';
import { allIcons } from '../utils/findIcon';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

@Injectable({
  providedIn: 'root'
}) export class IconService {
  private _icons: IconDefinition[];

  constructor() {
    this._icons = allIcons();
  }

  public icons() {
    return [...this._icons];
  }
}
