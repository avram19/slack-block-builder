import IPlainText from '../composition/IPlainText';
import IOption from '../composition/IOption';
import IConfirmDialog from '../composition/IConfirmDialog';

export default interface IExternalMultiSelect {
  type: 'multi_external_select';
  placeholder: IPlainText;
  action_id: string;
  min_query_length?: number;
  initial_options?: IOption[];
  confirm?: IConfirmDialog;
  max_selected_items?: number;
  focus_on_load?: boolean;
}
