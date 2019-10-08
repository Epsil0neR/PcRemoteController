export class PageDetails {
  public title: string = '';

  public static parse(json: string): PageDetails {
    if (!json)
      return null;

    const dto = JSON.parse(json);
    if (!dto)
      return null;

    const pd = new PageDetails();
    pd.title = dto.title;
    return pd;
  }

  public toDto() {
    return {
      title: this.title
    };
  }

  public toJson(): string {
    return JSON.stringify(this.toDto());
  }

}
