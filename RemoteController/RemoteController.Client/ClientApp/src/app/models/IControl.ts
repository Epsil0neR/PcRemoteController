import { IControl } from 'src/core';

export interface IFileSystemControl extends IControl {
  /**
   * Unique identifier for FileSystem component to remember opened folder.
   */
  id: string;
}
