export class PageDetails {
    public title: string = '';

    public toDto() {
        return {};
    }

    public toJson(): string {
        return JSON.stringify(this.toDto());
    }

    public static parse(json: string): PageDetails {
        return null;
    }
}

export enum ControlType {
    /**
     * Default control type. Invalid for usage.
     */
    None,

    /**
     * Invokes regular key, keys combination or special key.
     */
    Key,

    /**
     * Controls output volume
     */
    Volume,

    /**
     * Shows communication output. Temporary control type.
     */
    Output,

    /**
     * Executes specific commands.
     */
    Command,

    /**
     * Provides access to file system.
     */
    FileSystem,

    /**
     * Shows some info from informers.
     */
    Info, 
}

export interface IControl {
    type: ControlType;
    subType: any;
}
