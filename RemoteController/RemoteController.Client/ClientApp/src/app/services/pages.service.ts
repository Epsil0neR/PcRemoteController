import { Injectable } from '@angular/core';
import { IPage } from '../models/IPage';
import { PageDetails } from '../models/PageDetails';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PagesService {
  private static __key: string = 'rc.pages';

  constructor() {
    this.pages = new BehaviorSubject(null);
    if (localStorage.getItem(PagesService.__key) === null)
      localStorage.setItem(PagesService.__key, JSON.stringify(<any>[]));

    this.list();
  }

  public pages: BehaviorSubject<IPage[]>;

  private detailsKey(name: string) {
    const key = `${PagesService.__key}.${name}`;
    return key;
  }

  /**
   * Lists all available pages in ordered way.
   */
  public list(): IPage[] {
    const json = localStorage.getItem(PagesService.__key);
    if (typeof json !== 'string')
      return null;

    const obj = JSON.parse(json);
    if (obj instanceof Array === false)
      return null;

    const pages = <IPage[]>obj;
    const rv = pages
      .sort((a, b) => a.index - b.index);


    this.pages.next(rv);

    return rv;
  }

  /**
   * Gets page with details.
   * @param name
   */
  public details(name: string) {
    if (typeof name !== 'string')
      return null;

    const list = this.pages.getValue();
    if (list === null || list === undefined)
      return null;

    name = name.toLowerCase();

    const page = list.find(x => x.name === name);
    if (page === null || page === undefined)
      return null;

    const key = this.detailsKey(name);
    const json = localStorage.getItem(key);
    if (typeof json !== 'string')
      return null;

    const rv = PageDetails.parse(json);
    return rv;
  }

  /**
   * Creates new page with specified title and optional name.
   * @param title
   * @param name
   */
  public create(title: string, name: string = null): PageDetails {
    if (typeof title !== 'string')
      return null;
    if (typeof name !== 'string')
      name = title.toLowerCase();

    const list = this.pages.getValue(); // TODO: Init list.
    const exists = () => list.find(x => x.name === name) !== undefined;
    if (exists()) {
      const origName = name;
      let ind = 0;
      do {
        name = `${origName}-${++ind}`;
      } while (exists());
    }
    const details = new PageDetails();
    details.title = title;
    // TODO: Populate details

    const page: IPage = {
      title: title,
      name: name,
      index: list.length,
    };
    const key = this.detailsKey(name);
    localStorage.setItem(key, details.toJson());
    this.setPage(page);

    return details;
  }

  /**
   * Permanently deletes page by name
   * @param name
   */
  public delete(name: string) {
    if (typeof name !== 'string')
      return null;

    name = name.toLowerCase();

    const pages = this.pages.getValue();
    const rv = pages instanceof Array ? pages.findIndex(x => <any>(x.name === name)) : -1;

    if (rv >= 0) {
      pages.splice(rv, 1);
      pages.forEach((x, i) => {
        if (i < rv) return;
        x.index = i;
      });
      const key = this.detailsKey(name);
      localStorage.removeItem(key);
      this.savePages(pages);
    }
    return rv;
  }

  private savePages(pages: IPage[]) {
    const json = JSON.stringify(pages);
    localStorage.setItem(PagesService.__key, json);
    this.pages.next(pages);
  }
  //////////////////////////////////////////////////// STOPPED HERE.

  /**
   * Saves page. page.name must be unique, otherwise it will overwrite previous one.
   * @param page
   */
  public setPage(page: IPage) {
    if (page == null)
      return;

    const pages = this.pages.getValue();
    const ind = pages instanceof Array ? pages.findIndex(x => <any>(x.name === page.name)) : -1;
    if (ind >= 0)
      pages[ind] = page;
    else
      pages.push(page);

    this.savePages(pages);
  }
}
