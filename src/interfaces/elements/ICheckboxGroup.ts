import IOption from '../composition/IOption';
import IConfirmDialog from '../composition/IConfirmDialog';

export default interface ICheckboxGroup {
  type: 'checkboxes';
  action_id: string;
  options: IOption[];
  initial_options?: IOption[];
  confirm?: IConfirmDialog;
  focus_on_load?: boolean;
}
