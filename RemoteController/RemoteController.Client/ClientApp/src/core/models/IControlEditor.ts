import { IControl } from './IControl';
export interface IControlEditor {
  /**
   * Loads data into control before adding to visual tree.
   * Note: data can be null - just reset control to initial state.
   *
   * @param data should not be modified in control.
   * @returns true if loaded successfully, otherwise false.
   */
  load(data: IControl): boolean;
  /**
   * Returns data for control.
   *
   * @returns {IControl} data if saved successfully, otherwise null.
   */
  save(): IControl;
}
