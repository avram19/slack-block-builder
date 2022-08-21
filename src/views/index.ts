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

  /**
   * Modal view for Slack App Surfaces
   * @param title The title of the modal
   * @param blocks The blocks to display in the modal
   * @param close The close button text
   * @param submit The submit button text
   * @param private_metadata Any private metadata to send with the modal
   * @param callback_id The callback id to send with the modal
   * @param clear_on_close Whether to clear the modal when it is closed
   * @param notify_on_close Whether to notify the service when the modal is closed
   * @param external_id The external id to send with the modal
   * @param submit_disabled Whether to disable the submit button
   * @returns The modal view
   */
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

  /**
   * Home tab view for Slack App Surfaces
   * @param blocks The blocks to display in the home tab
   * @param private_metadata Any private metadata to send with the home tab
   * @param callback_id The callback id to send with the home tab
   * @param external_id The external id to send with the home tab
   */
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
