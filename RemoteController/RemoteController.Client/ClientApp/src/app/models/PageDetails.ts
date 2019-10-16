import { IKeyControl, IFileSystemControl } from './IControl';
import { IControl, ControlType } from 'src/core';

export class PageDetails {
  public title: string = '';
  public controls: IControl[] = [
    <IKeyControl>{
      type: ControlType.Key,
      col: 3,
      key: 'VOLUME_UP',
      text: 'Volume up',
      icon: 'volume-up'
    },
    <IKeyControl>{
      type: ControlType.Key,
      col: 3,
      key: 'VOLUME_DOWN',
      text: 'Volume down',
      icon: 'volume-down'
    },
    <IKeyControl>{
      type: ControlType.Key,
      col: 3,
      key: 'left',
      text: 'Left',
      icon: 'arrow-left'
    },
    <IKeyControl>{
      type: ControlType.Key,
      col: 3,
      key: 'right',
      text: 'Right',
      icon: 'arrow-right'
    },
    <IKeyControl>{
      type: ControlType.Key,
      col: 4,
      key: 'f',
      text: 'Fullscreen',
      icon: 'compress'
    },
    <IKeyControl>{
      type: ControlType.Key,
      col: 8,
      key: 'space',
      text: 'SPACE',
      icon: 'pause'
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
