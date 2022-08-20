import IActions from '../blocks/IActions';
import IContext from '../blocks/IContext';
import IDivider from '../blocks/IDivider';
import IHeader from '../blocks/IHeader';
import IImageBlock from '../blocks/IImageBlock';
import IInput from '../blocks/IInput';
import ISection from '../blocks/ISection';

export default interface IHomeTab {
  type: 'home';
  blocks: (IActions | IContext | IDivider | IHeader | IImageBlock | IInput | ISection)[];
  private_metadata?: string;
  callback_id?: string;
  external_id?: string;
}
