import IPlainText from '../composition/IPlainText';
import IConfirmDialog from '../composition/IConfirmDialog';

export default interface IButton {
  type: 'button';
  text: IPlainText;
  action_id: string;
  url?: string;
  value?: string;
  style?: 'primary' | 'danger';
  confirm?: IConfirmDialog;
  accessibility_label?: string;
}
