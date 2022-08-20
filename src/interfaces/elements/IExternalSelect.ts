import IPlainText from '../composition/IPlainText';
import IOption from '../composition/IOption';
import IOptionGroup from '../composition/IOptionGroup';
import IConfirmDialog from '../composition/IConfirmDialog';

type IExternalSelect =
  | {
      type: 'external_select';
      placeholder: IPlainText;
      action_id: string;
      min_query_length?: number;
      initial_option?: IOption;
      confirm?: IConfirmDialog;
      focus_on_load?: boolean;
    }
  | {
      type: 'external_select';
      placeholder: IPlainText;
      action_id: string;
      min_query_length?: number;
      initial_option?: IOptionGroup;
      confirm?: IConfirmDialog;
      focus_on_load?: boolean;
    };

export default IExternalSelect;
