import { IControl } from 'src/core';

export interface IFileSystemControl extends IControl {
  /**
   * Unique identifier for FileSystem component to remember opened folder.
   *
   * If not specified, control will not remember where it was opened last time.
   */
  id: string;

  /**
   * Maximum height of file system list control in px.
   * If 0 - height is unlimited.
   * All values except possitive numbers will be treated as 0.
   */
  maxHeight: number;
}
