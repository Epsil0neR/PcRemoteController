import { ControlType} from './ControlType';

export interface IControl {
  type: ControlType;
  col: number;
}

export interface IKeyControl extends IControl {
  key: string;
}
