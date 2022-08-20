import IPlainText from './IPlainText';
import IMarkdown from './IMarkdown';

export default interface IOption {
  text: IPlainText | IMarkdown;
  value: string;
  description?: IPlainText;
  url?: string;
}
