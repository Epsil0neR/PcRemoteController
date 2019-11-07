import { IControl } from './IControl';
export interface IControlViewer {
  /**
   * Indicates if should show in full width of control and ignore 'col' data
   */
  forceFullWidth: boolean;

  /**
   * Loads data into control before adding to visual tree.
   * @returns true if loaded successfully, otherwise false.
   */
  load(data: IControl): boolean;
}
