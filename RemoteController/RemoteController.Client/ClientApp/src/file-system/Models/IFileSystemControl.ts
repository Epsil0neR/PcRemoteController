import { IControl } from 'src/core';

export interface IFileSystemControl extends IControl {
  /**
   * Unique identifier for FileSystem component to remember opened folder.
   *
   * If not specified, control will not remember where it was opened last time.
   */
  id: string;
}
