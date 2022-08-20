import IPlainText from '../composition/IPlainText';
import IConfirmDialog from '../composition/IConfirmDialog';

export default interface IPublicChannelsSelect {
  type: 'channels_select';
  placeholder: IPlainText;
  action_id: string;
  initial_channel?: string;
  confirm?: IConfirmDialog;
  response_url_enabled?: boolean;
  focus_on_load?: boolean;
}
