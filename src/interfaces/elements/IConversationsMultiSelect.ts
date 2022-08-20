import IPlainText from '../composition/IPlainText';
import IConfirmDialog from '../composition/IConfirmDialog';
import IConversationsFilter from '../composition/IConversationsFilter';

export default interface IConversationsMultiSelect {
  type: 'multi_conversations_select';
  placeholder: IPlainText;
  action_id: string;
  initial_conversations?: string[];
  default_to_current_conversation?: boolean;
  confirm?: IConfirmDialog;
  max_selected_items?: number;
  filter?: IConversationsFilter;
  focus_on_load?: boolean;
}
