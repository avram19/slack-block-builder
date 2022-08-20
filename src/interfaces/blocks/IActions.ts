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

export default interface IActions {
  type: 'actions';
  elements: (
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
    | ITimePicker
  )[];
  block_id?: string;
}
