import IPlainText from '../composition/IPlainText';
import IMarkdown from '../composition/IMarkdown';
import IButton from '../elements/IButton';
import ICheckboxGroup from '../elements/ICheckboxGroup';
import IDatePicker from '../elements/IDatePicker';
import IOverflow from '../elements/IOverflow';
import IRadioButtonGroup from '../elements/IRadioButtonGroup';
import IStaticSelect from '../elements/IStaticSelect';
import IExternalSelect from '../elements/IExternalSelect';
import IUserSelect from '../elements/IUserSelect';
import IConversationsSelect from '../elements/IConversationsSelect';
import IPublicChannelsSelect from '../elements/IPublicChannelsSelect';
import ITimePicker from '../elements/ITimePicker';
import IStaticMultiSelect from '../elements/IStaticMultiSelect';
import IExternalMultiSelect from '../elements/IExternalMultiSelect';
import IUserMultiSelect from '../elements/IUserMultiSelect';
import IConversationsMultiSelect from '../elements/IConversationsMultiSelect';
import IPublicChannelsMultiSelect from '../elements/IPublicChannelsMultiSelect';
import IImage from '../elements/IImage';
import IStaticSelectGroup from '../elements/IStaticSelectGroup';
import IStaticMultiSelectGroup from '../elements/IStaticMultiSelectGroup';
import IExternalSelectGroup from '../elements/IExternalSelectGroup';
import IExternalMultiSelectGroup from '../elements/IExternalMultiSelectGroup';

export default interface ISection {
  type: 'section';
  text: IPlainText | IMarkdown | undefined;
  fields?: (IPlainText | IMarkdown)[];
  block_id?: string;
  accessory?:
    | IButton
    | ICheckboxGroup
    | IDatePicker
    | IOverflow
    | IImage
    | IRadioButtonGroup
    | IStaticSelect
    | IStaticSelectGroup
    | IStaticMultiSelect
    | IStaticMultiSelectGroup
    | IExternalSelect
    | IExternalSelectGroup
    | IExternalMultiSelect
    | IExternalMultiSelectGroup
    | IUserSelect
    | IUserMultiSelect
    | IConversationsSelect
    | IConversationsMultiSelect
    | IPublicChannelsSelect
    | IPublicChannelsMultiSelect
    | ITimePicker;
}
