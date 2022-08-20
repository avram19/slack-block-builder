import IOption from '../composition/IOption';
import IConfirmDialog from '../composition/IConfirmDialog';

export default interface IOverflow {
  type: 'overflow';
  action_id: string;
  options: IOption[];
  confirm?: IConfirmDialog;
}
