import { Injectable } from '@angular/core';
import { IPage, PageDetails } from "../models/_exports";

@Injectable({
    providedIn: 'root'
})
export class PagesService {
    private static __key: string = 'rc.pages';

    constructor() {
        if (localStorage.getItem(PagesService.__key) === null)
            localStorage.setItem(PagesService.__key, JSON.parse(<any>[]));
    }

    private detailsKey(name: string) {
        let key = `${PagesService.__key}.${name}`;
        return key;
    }

    /**
     * Lists all available pages in ordered way.
     */
    public list(): IPage[] {
        let json = localStorage.getItem(PagesService.__key);
        if (typeof json !== 'string')
            return null;

        let obj = JSON.parse(json);
        if (obj instanceof Array === false)
            return null;

        let pages = <IPage[]>obj;
        let rv = pages
            .sort((a, b) => a.index - b.index);

        return rv;
    }

    /**
     * Gets page with details.
     * @param name
     */
    public details(name: string) {
        if (typeof name !== 'string')
            return null;

        let list = this.list();
        if (list === null || list === undefined)
            return null;

        name = name.toLowerCase();

        let page = list.find(x => x.name === name);
        if (page === null || page === undefined)
            return null;

        let key = this.detailsKey(name);
        let json = localStorage.getItem(key);
        if (typeof json !== 'string')
            return null;

        let rv = PageDetails.parse(json);
        return rv;
    }

    /**
     * Creates new page with specified title and optional name.
     * @param title
     * @param name
     */
    public create(title: string, name: string = null) {
        if (typeof title !== 'string')
            return null;
        if (typeof name !== 'string')
            name = title.toLowerCase();

        let list = this.list();//TODO: Init list.
        let exists = () => list.find(x => x.name === name) !== undefined;
        if (exists()) {
            let origName = name;
            let ind = 0;
            do {
                name = `${origName}-${++ind}`;
            } while (exists())
        }
        let details = new PageDetails();
        details.title = title;
        //TODO: Populate details

        let page: IPage = {
            title: title,
            name: name,
            index: list.length,
        };
        this.setPage(page);
        let key = this.detailsKey(name);
        localStorage.setItem(key, details.toJson());
    }

    /**
     * Permanently deletes page by name
     * @param name
     */
    public delete(name: string) {
        if (typeof name !== 'string')
            return null;

        name = name.toLowerCase();

        let pages = this.list();
        let rv = pages instanceof Array ? pages.findIndex(x => <any>(x.name === name)) : -1;

        if (rv >= 0) {
            pages.splice(rv, 1);
            pages.forEach((x, i) => {
                if (i < rv) return;
                x.index = i;
            });
            let key = this.detailsKey(name);
            localStorage.removeItem(key);
            this.savePages(pages);
        }
        return rv;
    }

    private savePages(pages: IPage[]) {
        let json = JSON.stringify(pages);
        localStorage.setItem(PagesService.__key, json);
    }
    //////////////////////////////////////////////////// STOPPED HERE.
    //+TODO: Initialize pages array in localStorage in ctor.

    /**
     * Saves page. page.name must be unique, otherwise it will overwrite previous one.
     * @param page
     */
    public setPage(page: IPage) {
        if (page == null)
            return;

        let pages = this.list();
        let ind = pages instanceof Array ? pages.findIndex(x => <any>(x.name === page.name)) : -1;
        if (ind >= 0)
            pages[ind] = page;
        else
            pages.push(page);

        this.savePages(pages);
    }
}
