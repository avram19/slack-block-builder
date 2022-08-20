import IPlainText from '../composition/IPlainText';
import IDispatchAction from '../composition/IDispatchAction';

export default interface IPlainTextInput {
  type: 'plain_text_input';
  action_id: string;
  placeholder?: IPlainText;
  initial_value?: string;
  multiline?: boolean;
  min_length?: number;
  max_length?: number;
  dispatch_action_config?: IDispatchAction;
  focus_on_load?: boolean;
}
