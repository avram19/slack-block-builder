import IPlainText from '../composition/IPlainText';
import IOption from '../composition/IOption';
import IConfirmDialog from '../composition/IConfirmDialog';

export default interface IStaticSelect {
  type: 'static_select';
  placeholder: IPlainText;
  action_id: string;
  options: IOption[];
  initial_option?: IOption;
  confirm?: IConfirmDialog;
  focus_on_load?: boolean;
}
