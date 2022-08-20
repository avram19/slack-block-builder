import IPlainText from '../composition/IPlainText';
import IOption from '../composition/IOption';
import IOptionGroup from '../composition/IOptionGroup';
import IConfirmDialog from '../composition/IConfirmDialog';

type IExternalMultiSelect =
  | {
      type: 'multi_external_select';
      placeholder: IPlainText;
      action_id: string;
      min_query_length?: number;
      initial_options?: IOption[];
      confirm?: IConfirmDialog;
      max_selected_items?: number;
      focus_on_load?: boolean;
    }
  | {
      type: 'multi_external_select';
      placeholder: IPlainText;
      action_id: string;
      min_query_length?: number;
      initial_options?: IOptionGroup[];
      confirm?: IConfirmDialog;
      max_selected_items?: number;
      focus_on_load?: boolean;
    };

export default IExternalMultiSelect;
