import IPlainText from '../composition/IPlainText';
import IConfirmDialog from '../composition/IConfirmDialog';

export default interface IUserSelect {
  type: 'users_select';
  placeholder: IPlainText;
  action_id: string;
  initial_user?: string;
  confirm?: IConfirmDialog;
  focus_on_load?: boolean;
}
