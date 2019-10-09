import { ControlType} from './ControlType';

export interface IControl {
  type: ControlType;
  subType: any;
  col: number;
}

export interface IKeyControl extends IControl {
  key: string;
}
