import { ControlType} from './ControlType';

export interface IControl {
  type: ControlType;
  col: number;
}

export interface IKeyControl extends IControl {
  key: string;
  text?: string;
  icon?: string;
}

export interface IFileSystemControl extends IControl {
  /**
   * Unique identifier for FileSystem component to remember opened folder.
   */
  id: string;
}
