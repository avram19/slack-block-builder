import IPlainText from './IPlainText';
import IMarkdown from './IMarkdown';

export default interface IConfirmDialog {
  title: IPlainText;
  text: IPlainText | IMarkdown;
  confirm: IPlainText;
  deny: IPlainText;
  style?: 'primary' | 'danger';
}
