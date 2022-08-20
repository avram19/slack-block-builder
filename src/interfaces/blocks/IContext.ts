import IImage from '../elements/IImage';
import IPlainText from '../composition/IPlainText';
import IMarkdown from '../composition/IMarkdown';

export default interface IContext {
  type: 'context';
  elements: (IImage | IPlainText | IMarkdown)[];
  block_id?: string;
}
