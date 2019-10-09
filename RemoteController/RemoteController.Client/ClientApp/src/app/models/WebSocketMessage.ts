import { WebSocketMessageType } from './WebSocketMessageType';

export class WebSocketMessage {
    private __Type: WebSocketMessageType = WebSocketMessageType.Request;
    private __ActionName: string = null;
    private __Hash: string = null;
    private __Data: any = null;

    static parse(object: any): WebSocketMessage {
        if (object instanceof Object === false)
            return null;

        const rv = new WebSocketMessage();
        rv.Type = object.Type;
        rv.ActionName = object.ActionName;
        rv.Hash = object.Hash;
        rv.Data = object.Data;
        return rv;
    }

    get Type(): WebSocketMessageType {
        return this.__Type;
    }
    set Type(value: WebSocketMessageType) {
        this.__Type = value;
    }

    get ActionName(): string {
        return this.__ActionName;
    }
    set ActionName(value: string) {
        this.__ActionName = value;
    }

    get Hash(): string {
        return this.__Hash;
    }
    set Hash(value: string) {
        this.__Hash = value;
    }

    get Data(): any {
        return this.__Data;
    }
    set Data(value: any) {
        this.__Data = value;
    }

    toDto(): Object {
        const rv = {
            Type: this.Type,
            ActionName: this.ActionName,
            Hash: this.Hash,
            Data: this.Data
        };
        return rv;
    }
}
