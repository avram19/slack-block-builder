import IPlainText from '../composition/IPlainText';

export default interface IImageBlock {
  type: 'image';
  image_url: string;
  alt_text: string;
  title?: IPlainText;
  block_id?: string;
}
