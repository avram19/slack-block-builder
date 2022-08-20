import IPlainText from '../composition/IPlainText';
import IConfirmDialog from '../composition/IConfirmDialog';

export default interface IDatePicker {
  type: 'datepicker';
  action_id: string;
  placeholder?: IPlainText;
  initial_date?: string;
  confirm?: IConfirmDialog;
  focus_on_load?: boolean;
}
