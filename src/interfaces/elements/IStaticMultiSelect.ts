import IPlainText from '../composition/IPlainText';
import IOption from '../composition/IOption';
import IOptionGroup from '../composition/IOptionGroup';
import IConfirmDialog from '../composition/IConfirmDialog';

type IStaticMultiSelect =
  | {
      type: 'multi_static_select';
      placeholder: IPlainText;
      action_id: string;
      options: IOption[];
      initial_options?: IOption[];
      confirm?: IConfirmDialog;
      max_selected_items?: number;
      focus_on_load?: boolean;
    }
  | {
      type: 'multi_static_select';
      placeholder: IPlainText;
      action_id: string;
      option_groups: IOptionGroup[];
      initial_options?: IOptionGroup[];
      confirm?: IConfirmDialog;
      max_selected_items?: number;
      focus_on_load?: boolean;
    };

export default IStaticMultiSelect;
