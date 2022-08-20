import IPlainText from '../composition/IPlainText';
import IConfirmDialog from '../composition/IConfirmDialog';

export default interface ITimePicker {
  type: 'timepicker';
  action_id: string;
  placeholder?: IPlainText;
  initial_time?: string;
  confirm?: IConfirmDialog;
  focus_on_load?: boolean;
}
