import IPlainText from '../composition/IPlainText';
import IOptionGroup from '../composition/IOptionGroup';
import IConfirmDialog from '../composition/IConfirmDialog';

export default interface IExternalMultiSelectGroup {
  type: 'multi_external_select';
  placeholder: IPlainText;
  action_id: string;
  min_query_length?: number;
  initial_options?: IOptionGroup[];
  confirm?: IConfirmDialog;
  max_selected_items?: number;
  focus_on_load?: boolean;
}
