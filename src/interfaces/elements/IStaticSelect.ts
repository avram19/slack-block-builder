import IPlainText from '../composition/IPlainText';
import IOption from '../composition/IOption';
import IOptionGroup from '../composition/IOptionGroup';
import IConfirmDialog from '../composition/IConfirmDialog';

type IStaticSelect =
  | {
      type: 'static_select';
      placeholder: IPlainText;
      action_id: string;
      options: IOption[];
      initial_option?: IOption;
      confirm?: IConfirmDialog;
      focus_on_load?: boolean;
    }
  | {
      type: 'static_select';
      placeholder: IPlainText;
      action_id: string;
      option_groups: IOptionGroup[];
      initial_option?: IOptionGroup;
      confirm?: IConfirmDialog;
      focus_on_load?: boolean;
    };

export default IStaticSelect;
