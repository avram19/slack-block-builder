import IPlainText from '../composition/IPlainText';
import IConfirmDialog from '../composition/IConfirmDialog';
import IConversationsFilter from '../composition/IConversationsFilter';

export default interface IConversationsSelect {
  type: 'conversations_select';
  placeholder: IPlainText;
  action_id: string;
  initial_conversation?: string;
  default_to_current_conversation?: boolean;
  confirm?: IConfirmDialog;
  response_url_enabled?: boolean;
  filter?: IConversationsFilter;
  focus_on_load?: boolean;
}
