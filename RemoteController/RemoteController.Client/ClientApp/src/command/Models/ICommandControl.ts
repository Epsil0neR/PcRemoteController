import { IControl } from "src/core";

export interface ICommandControl extends IControl {
  /**
   * Command name to activate via {WebSocketService}.
   */
  command: string;

  /**
   * Title for key and text that will be displayed when no icon is selected or {iconWithText} is set to {true}.
   */
  text?: string;

  /**
   * Icon that is used for control.
   */
  icon?: string;

  /**
   * If set to {true} and {icon} is available - shows both - text and icon.
   */
  iconWithText?: boolean;
}
