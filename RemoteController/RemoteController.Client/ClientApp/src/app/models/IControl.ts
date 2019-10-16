import { IControl } from 'src/core';

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
