import { IControl, IKeyControl } from './IControl';
import { ControlType } from './ControlType';

export class PageDetails {
  public title: string = '';
  public controls: IControl[] = [
    <IKeyControl>{
      type: ControlType.Key,
      col: 4,
      key: 'F1'
    },
    <IKeyControl>{
      type: ControlType.Key,
      col: 4,
      key: 'F12'
    },
    <IKeyControl>{
      type: ControlType.Key,
      col: 4,
      key: 'F11'
    }
  ];

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
      title: this.title,
      items: [], // TODO: Implement
    };
  }

  public toJson(): string {
    return JSON.stringify(this.toDto());
  }

}
