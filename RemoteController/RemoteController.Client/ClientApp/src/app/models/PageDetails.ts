import { IControl, IKeyControl, IFileSystemControl } from './IControl';
import { ControlType } from './ControlType';

export class PageDetails {
  public title: string = '';
  public controls: IControl[] = [
    <IKeyControl>{
      type: ControlType.Key,
      col: 4,
      key: 'VOLUME_UP',
      text: 'Volume up',
      icon: 'volume-up'
    },
    <IKeyControl>{
      type: ControlType.Key,
      col: 4,
      key: 'VOLUME_DOWN',
      text: 'Volume down',
      icon: 'volume-down'
    },
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
    },
    {
      type: ControlType.Volume,
      col: 12
    },
    <IFileSystemControl>{
      type: ControlType.FileSystem,
      col: 12,
      id: '1'
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
    pd.controls = (<IControl[]>(dto.controls)).map(this.parseControl);
    return pd;
  }

  private static parseControl(dto: IControl): IControl {
    return dto;
  }

  public toDto() {
    return {
      title: this.title,
      controls: this.controls.map(this.controlToDto),
    };
  }

  public toJson(): string {
    return JSON.stringify(this.toDto());
  }

  private controlToDto(control: IControl): IControl {
    return control;
  }
}
