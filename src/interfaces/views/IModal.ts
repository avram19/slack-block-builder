import IPlainText from '../composition/IPlainText';
import IActions from '../blocks/IActions';
import IContext from '../blocks/IContext';
import IDivider from '../blocks/IDivider';
import IHeader from '../blocks/IHeader';
import IImageBlock from '../blocks/IImageBlock';
import IInput from '../blocks/IInput';
import ISection from '../blocks/ISection';

export default interface IModal {
  type: 'modal';
  title: IPlainText;
  blocks: (IActions | IContext | IDivider | IHeader | IImageBlock | IInput | ISection)[];
  close?: IPlainText;
  submit?: IPlainText;
  private_metadata?: string;
  callback_id?: string;
  clear_on_close?: boolean;
  notify_on_close?: boolean;
  external_id?: string;
  submit_disabled?: boolean;
}
