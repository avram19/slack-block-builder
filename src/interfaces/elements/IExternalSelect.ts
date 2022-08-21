import IPlainText from '../composition/IPlainText';
import IOption from '../composition/IOption';
import IConfirmDialog from '../composition/IConfirmDialog';

export default interface IExternalSelect {
  type: 'external_select';
  placeholder: IPlainText;
  action_id: string;
  min_query_length?: number;
  initial_option?: IOption;
  confirm?: IConfirmDialog;
  focus_on_load?: boolean;
}
