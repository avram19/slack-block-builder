import IPlainText from '../composition/IPlainText';
import IPlainTextInput from '../elements/IPlainTextInput';
import ICheckboxGroup from '../elements/ICheckboxGroup';
import IRadioButtonGroup from '../elements/IRadioButtonGroup';
import IStaticSelect from '../elements/IStaticSelect';
import IStaticMultiSelect from '../elements/IStaticMultiSelect';
import IExternalSelect from '../elements/IExternalSelect';
import IExternalMultiSelect from '../elements/IExternalMultiSelect';
import IUserSelect from '../elements/IUserSelect';
import IUserMultiSelect from '../elements/IUserMultiSelect';
import IConversationsSelect from '../elements/IConversationsSelect';
import IConversationsMultiSelect from '../elements/IConversationsMultiSelect';
import IPublicChannelsSelect from '../elements/IPublicChannelsSelect';
import IPublicChannelsMultiSelect from '../elements/IPublicChannelsMultiSelect';
import IDatePicker from '../elements/IDatePicker';
import ITimePicker from '../elements/ITimePicker';
import IStaticSelectGroup from '../elements/IStaticSelectGroup';
import IStaticMultiSelectGroup from '../elements/IStaticMultiSelectGroup';
import IExternalSelectGroup from '../elements/IExternalSelectGroup';
import IExternalMultiSelectGroup from '../elements/IExternalMultiSelectGroup';

export default interface IInput {
  type: 'input';
  label: IPlainText;
  element: (
    | IPlainTextInput
    | ICheckboxGroup
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
    | IDatePicker
    | ITimePicker
  )[];
  dispatch_action?: boolean;
  block_id?: string;
  hint?: IPlainText;
  optional?: boolean;
}
