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
