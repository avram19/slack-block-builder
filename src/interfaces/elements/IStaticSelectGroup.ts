import IPlainText from '../composition/IPlainText';
import IOptionGroup from '../composition/IOptionGroup';
import IConfirmDialog from '../composition/IConfirmDialog';

export default interface IStaticSelectGroup {
  type: 'static_select';
  placeholder: IPlainText;
  action_id: string;
  option_groups: IOptionGroup[];
  initial_option?: IOptionGroup;
  confirm?: IConfirmDialog;
  focus_on_load?: boolean;
}
