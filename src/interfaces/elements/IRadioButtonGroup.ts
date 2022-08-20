import IOption from '../composition/IOption';
import IConfirmDialog from '../composition/IConfirmDialog';

export default interface IRadioButtonGroup {
  type: 'radio_buttons';
  action_id: string;
  options: IOption[];
  initial_option?: IOption;
  confirm?: IConfirmDialog;
  focus_on_load?: boolean;
}
