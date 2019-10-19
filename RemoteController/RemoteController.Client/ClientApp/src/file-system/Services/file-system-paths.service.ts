import { Injectable } from '@angular/core';
import { makeid } from 'src/core';

@Injectable({
  providedIn: 'root'
})
export class FileSystemPathsService {
  private static readonly key = 'rc.filesystem.paths';
  private data: { [id: string]: string } = null;

  constructor() {
    this.reload();
  }

  /**
   * Relaods data from local storage.
   *
   * @private
   * @memberof FileSystemPathsService
   */
  private reload() {
    const s = localStorage.getItem(FileSystemPathsService.key);
    if (s !== null) {
      const d = JSON.parse(s);
      const data: { [id: string]: string } = {};
      for (const key in d) {
        if (d.hasOwnProperty(key)) {
          const element = d[key];
          if (typeof element === 'string')
            data[key] = element;
        }
      }
      this.data = data;
    } else {
      this.data = {};
    }
  }

  /**
   * Saves current data to local storage.
   *
   * @private
   * @returns
   * @memberof FileSystemPathsService
   */
  private save() {
    if (!this.data)
      return;
    localStorage.setItem(FileSystemPathsService.key, JSON.stringify(this.data));
  }

  /**
   * Gets path for control with specified id.
   *
   * @param {string} id Contol unique id. Must be non-nullable string. Must be non-empty string.
   * @returns {string} Saved path or null if control id previously did not saved any paths.
   * @memberof FileSystemPathsService
   */
  public getPath(id: string): string {
    if (typeof id !== 'string')
      throw new Error('id param must be of type string.');
    if (id.length === 0)
      throw new Error('id param must be non-empty string.');

    if (!this.data.hasOwnProperty(id))
      return null;

    return this.data[id];
  }

  /**
   *Saves path for control with specified id.
   *
   * @param {string} id Control unique id. Must be non-nullable string. Must be non-empty string.
   * @param {string} path Path to save. Must be non-nullable string, can be empty string.
   * @memberof FileSystemPathsService
   */
  public setPath(id: string, path: string) {
    if (typeof id !== 'string')
      throw new Error('id param must be of type string.');
    if (id.length === 0)
      throw new Error('id param must be non-empty string.');
    if (typeof path !== 'string')
      throw new Error('path param must be of type string.');

    this.data[id] = path;
    this.save();
  }

  /**
   * Tries to delete path for specified contol id.
   *
   * @param {string} id Control unique id. Must be non-nullable string. Must be non-empty string.
   * @returns {boolean} Returns true if control id had previously stored path, otherwise returns false.
   * @memberof FileSystemPathsService
   */
  public delete(id: string): boolean {
    if (typeof id !== 'string')
      throw new Error('id param must be of type string.');
    if (id.length === 0)
      throw new Error('id param must be non-empty string.');

    if (!this.data.hasOwnProperty(id))
      return false;

    delete this.data[id];
    this.save();
    return true;
  }

  /**
   * Generates new unique id for control.
   *
   * @returns {string}
   * @memberof FileSystemPathsService
   */
  public generateId(): string {
    let id: string;
    do {
      id = makeid(8);
    } while (this.data.hasOwnProperty(id));

    return id;
  }

  /**
   * Gets all control ids.
   *
   * @returns {string[]}
   * @memberof FileSystemPathsService
   */
  public getAllIDs(): string[] {
    return Object.keys(this.data);
  }
}
