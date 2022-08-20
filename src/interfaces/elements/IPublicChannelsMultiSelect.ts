import IPlainText from '../composition/IPlainText';
import IConfirmDialog from '../composition/IConfirmDialog';

export default interface IPublicChannelsMultiSelect {
  type: 'multi_channels_select';
  placeholder: IPlainText;
  action_id: string;
  initial_channels?: string[];
  confirm?: IConfirmDialog;
  max_selected_items?: number;
  focus_on_load?: boolean;
}
