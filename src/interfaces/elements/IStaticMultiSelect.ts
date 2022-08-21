import IPlainText from '../composition/IPlainText';
import IOption from '../composition/IOption';
import IConfirmDialog from '../composition/IConfirmDialog';

export default interface IStaticMultiSelect {
  type: 'multi_static_select';
  placeholder: IPlainText;
  action_id: string;
  options: IOption[];
  initial_options?: IOption[];
  confirm?: IConfirmDialog;
  max_selected_items?: number;
  focus_on_load?: boolean;
}
