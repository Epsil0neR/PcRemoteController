import { IControl } from './IControl';
export interface IControlViewer {
  /**
   * Loads data into control before adding to visual tree.
   * @returns true if loaded successfully, otherwise false.
   */
  load(data: IControl): boolean;
}
