import IPlainText from '../composition/IPlainText';
import IOptionGroup from '../composition/IOptionGroup';
import IConfirmDialog from '../composition/IConfirmDialog';

export default interface IExternalSelectGroup {
  type: 'external_select';
  placeholder: IPlainText;
  action_id: string;
  min_query_length?: number;
  initial_option?: IOptionGroup;
  confirm?: IConfirmDialog;
  focus_on_load?: boolean;
}
