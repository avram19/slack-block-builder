import IActions from '../interfaces/blocks/IActions';
import IContext from '../interfaces/blocks/IContext';
import IDivider from '../interfaces/blocks/IDivider';
import IHeader from '../interfaces/blocks/IHeader';
import IImageBlock from '../interfaces/blocks/IImageBlock';
import IInput from '../interfaces/blocks/IInput';
import ISection from '../interfaces/blocks/ISection';
import Composition from '../composition';
import IModal from '../interfaces/views/IModal';
import IHomeTab from '../interfaces/views/IHomeTab';

class Views {
  private readonly composition: Composition;
  constructor() {
    this.composition = new Composition();
  }

  modal(
    title: string,
    blocks: (IActions | IContext | IDivider | IHeader | IImageBlock | IInput | ISection)[],
    close?: string,
    submit?: string,
    private_metadata?: string,
    callback_id?: string,
    clear_on_close?: boolean,
    notify_on_close?: boolean,
    external_id?: string,
    submit_disabled?: boolean,
  ): IModal {
    return {
      type: 'modal',
      title: this.composition.plainText(title),
      blocks,
      close: close ? this.composition.plainText(close) : undefined,
      submit: submit ? this.composition.plainText(submit) : undefined,
      private_metadata,
      callback_id,
      clear_on_close,
      notify_on_close,
      external_id,
      submit_disabled,
    };
  }

  homeTab(
    blocks: (IActions | IContext | IDivider | IHeader | IImageBlock | IInput | ISection)[],
    private_metadata?: string,
    callback_id?: string,
    external_id?: string,
  ): IHomeTab {
    return { type: 'home', blocks, private_metadata, callback_id, external_id };
  }
}

export default Views;
