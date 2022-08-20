import IPlainText from '../composition/IPlainText';
import IConfirmDialog from '../composition/IConfirmDialog';

export default interface IUserMultiSelect {
  type: 'multi_users_select';
  placeholder: IPlainText;
  action_id: string;
  initial_users?: string[];
  confirm?: IConfirmDialog;
  max_selected_items?: number;
  focus_on_load?: boolean;
}
