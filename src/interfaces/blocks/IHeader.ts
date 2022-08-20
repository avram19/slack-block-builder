import IPlainText from '../composition/IPlainText';

export default interface IHeader {
  type: 'header';
  text: IPlainText;
  block_id?: string;
}
