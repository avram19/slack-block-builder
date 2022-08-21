import IPlainText from '../composition/IPlainText';
import IOptionGroup from '../composition/IOptionGroup';
import IConfirmDialog from '../composition/IConfirmDialog';

export default interface IStaticMultiSelectGroup {
  type: 'multi_static_select';
  placeholder: IPlainText;
  action_id: string;
  option_groups: IOptionGroup[];
  initial_options?: IOptionGroup[];
  confirm?: IConfirmDialog;
  max_selected_items?: number;
  focus_on_load?: boolean;
}
