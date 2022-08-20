import IButton from '../interfaces/elements/IButton';
import ICheckboxGroup from '../interfaces/elements/ICheckboxGroup';
import IDatePicker from '../interfaces/elements/IDatePicker';
import IOverflow from '../interfaces/elements/IOverflow';
import IRadioButtonGroup from '../interfaces/elements/IRadioButtonGroup';
import IStaticSelect from '../interfaces/elements/IStaticSelect';
import IExternalSelect from '../interfaces/elements/IExternalSelect';
import IUserSelect from '../interfaces/elements/IUserSelect';
import IConversationsSelect from '../interfaces/elements/IConversationsSelect';
import IPublicChannelsSelect from '../interfaces/elements/IPublicChannelsSelect';
import ITimePicker from '../interfaces/elements/ITimePicker';
import IActions from '../interfaces/blocks/IActions';
import IImage from '../interfaces/elements/IImage';
import IPlainText from '../interfaces/composition/IPlainText';
import IMarkdown from '../interfaces/composition/IMarkdown';
import IContext from '../interfaces/blocks/IContext';
import IDivider from '../interfaces/blocks/IDivider';
import IFile from '../interfaces/blocks/IFile';
import IHeader from '../interfaces/blocks/IHeader';
import IImageBlock from '../interfaces/blocks/IImageBlock';
import IPlainTextInput from '../interfaces/elements/IPlainTextInput';
import IStaticMultiSelect from '../interfaces/elements/IStaticMultiSelect';
import IExternalMultiSelect from '../interfaces/elements/IExternalMultiSelect';
import IUserMultiSelect from '../interfaces/elements/IUserMultiSelect';
import IConversationsMultiSelect from '../interfaces/elements/IConversationsMultiSelect';
import IPublicChannelsMultiSelect from '../interfaces/elements/IPublicChannelsMultiSelect';
import IInput from '../interfaces/blocks/IInput';
import ISection from '../interfaces/blocks/ISection';
import Composition from '../composition';

class Blocks {
  private readonly composition: Composition;

  constructor() {
    this.composition = new Composition();
  }

  actions(
    elements: [
      | IButton
      | ICheckboxGroup
      | IDatePicker
      | IOverflow
      | IRadioButtonGroup
      | IStaticSelect
      | IExternalSelect
      | IUserSelect
      | IConversationsSelect
      | IPublicChannelsSelect
      | ITimePicker,
    ],
    block_id?: string,
  ): IActions {
    return { type: 'actions', elements, block_id };
  }

  context(elements: [IImage | IPlainText | IMarkdown], block_id?: string): IContext {
    return { type: 'context', elements, block_id };
  }

  divider(block_id?: string): IDivider {
    return { type: 'divider', block_id };
  }

  file(external_id: string, source?: string, block_id?: string): IFile {
    return { type: 'file', external_id, source: source || 'remote', block_id };
  }

  header(text: string, block_id?: string): IHeader {
    return { type: 'header', text: this.composition.plainText(text), block_id };
  }

  image(image_url: string, alt_text: string, title?: string, block_id?: string): IImageBlock {
    return {
      type: 'image',
      image_url,
      alt_text,
      block_id,
      title: title ? this.composition.plainText(title) : undefined,
    };
  }

  input(
    label: string,
    element: [
      | IPlainTextInput
      | ICheckboxGroup
      | IRadioButtonGroup
      | IStaticSelect
      | IStaticMultiSelect
      | IExternalSelect
      | IExternalMultiSelect
      | IUserSelect
      | IUserMultiSelect
      | IConversationsSelect
      | IConversationsMultiSelect
      | IPublicChannelsSelect
      | IPublicChannelsMultiSelect
      | IDatePicker
      | ITimePicker,
    ],
    _dispatch_action?: boolean,
    block_id?: string,
    hint?: string,
    optional?: boolean,
  ): IInput {
    return {
      type: 'input',
      label: this.composition.plainText(label),
      element,
      block_id,
      hint: hint ? this.composition.plainText(hint) : undefined,
      optional: optional || false,
      dispatch_action: _dispatch_action || false,
    };
  }

  section(
    text?: string,
    block_id?: string,
    fields?: string[],
    accessory?:
      | IButton
      | ICheckboxGroup
      | IDatePicker
      | IOverflow
      | IImage
      | IRadioButtonGroup
      | IStaticSelect
      | IStaticMultiSelect
      | IExternalSelect
      | IExternalMultiSelect
      | IUserSelect
      | IUserMultiSelect
      | IConversationsSelect
      | IConversationsMultiSelect
      | IPublicChannelsSelect
      | IPublicChannelsMultiSelect
      | ITimePicker,
    usePlainText?: boolean,
  ): ISection {
    if (!fields && !text) {
      throw new Error('Either text or fields must be provided');
    }
    const convertText = (stringText: string | undefined): IPlainText | IMarkdown | undefined => {
      if (stringText) {
        return usePlainText ? this.composition.plainText(stringText) : this.composition.markdown(stringText);
      }
    };
    const getFieldText = (stringText: string): IPlainText | IMarkdown => {
      return usePlainText ? this.composition.plainText(stringText) : this.composition.markdown(stringText);
    };
    return {
      type: 'section',
      block_id,
      accessory,
      text: convertText(text),
      fields: fields?.map((field) => getFieldText(field)) ?? undefined,
    };
  }
}

export default Blocks;
