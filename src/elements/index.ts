import Composition from '../composition';
import IButton from '../interfaces/elements/IButton';
import IConfirmDialog from '../interfaces/composition/IConfirmDialog';
import ICheckboxGroup from '../interfaces/elements/ICheckboxGroup';
import IOption from '../interfaces/composition/IOption';
import IDatePicker from '../interfaces/elements/IDatePicker';
import IImage from '../interfaces/elements/IImage';
import IOverflow from '../interfaces/elements/IOverflow';
import IStaticMultiSelect from '../interfaces/elements/IStaticMultiSelect';
import IOptionGroup from '../interfaces/composition/IOptionGroup';
import IStaticMultiSelectGroup from '../interfaces/elements/IStaticMultiSelectGroup';
import IExternalMultiSelect from '../interfaces/elements/IExternalMultiSelect';
import IExternalMultiSelectGroup from '../interfaces/elements/IExternalMultiSelectGroup';
import IUserMultiSelect from '../interfaces/elements/IUserMultiSelect';
import IConversationsFilter from '../interfaces/composition/IConversationsFilter';
import IConversationsMultiSelect from '../interfaces/elements/IConversationsMultiSelect';
import IPublicChannelsMultiSelect from '../interfaces/elements/IPublicChannelsMultiSelect';
import IDispatchAction from '../interfaces/composition/IDispatchAction';
import IPlainTextInput from '../interfaces/elements/IPlainTextInput';
import IRadioButtonGroup from '../interfaces/elements/IRadioButtonGroup';
import ITimePicker from '../interfaces/elements/ITimePicker';
import IStaticSelect from '../interfaces/elements/IStaticSelect';
import IStaticSelectGroup from '../interfaces/elements/IStaticSelectGroup';
import IExternalSelect from '../interfaces/elements/IExternalSelect';
import IExternalSelectGroup from '../interfaces/elements/IExternalSelectGroup';
import IUserSelect from '../interfaces/elements/IUserSelect';
import IConversationsSelect from '../interfaces/elements/IConversationsSelect';
import IPublicChannelsSelect from '../interfaces/elements/IPublicChannelsSelect';

class Elements {
  private readonly composition: Composition;
  constructor() {
    this.composition = new Composition();
  }

  /**
   * Button element
   * @param text Text to display on the button
   * @param action_id Action id to identify the button
   * @param value Value to return when the button is clicked
   * @param url URL to open when the button is clicked
   * @param style Style of the button
   * @param confirm Confirm dialog to display when the button is clicked
   * @param accessibility_label Accessibility label for the button
   */
  button(
    text: string,
    action_id: string,
    value?: string,
    url?: string,
    style?: 'primary' | 'danger',
    confirm?: IConfirmDialog,
    accessibility_label?: string,
  ): IButton {
    return {
      type: 'button',
      text: this.composition.plainText(text),
      action_id,
      value,
      url,
      style,
      confirm,
      accessibility_label,
    };
  }

  /**
   * Checkbox Group element
   * @param action_id Action id to identify the checkbox group
   * @param options Options to display in the checkbox group
   * @param initial_options Initial options to display in the checkbox group
   * @param confirm Confirm dialog to display when the checkbox group is clicked
   * @param focus_on_load Focus on load
   */
  checkboxGroup(
    action_id: string,
    options: IOption[],
    initial_options?: IOption[],
    confirm?: IConfirmDialog,
    focus_on_load?: boolean,
  ): ICheckboxGroup {
    return {
      type: 'checkboxes',
      action_id,
      options,
      initial_options,
      confirm,
      focus_on_load,
    };
  }

  /**
   * Date picker element
   * @param action_id Action id to identify the date picker
   * @param placeholder Placeholder text to display in the date picker
   * @param initial_date Initial date to display in the date picker in YYYY=MM-DD format
   * @param confirm Confirm dialog to display when the date picker is clicked
   * @param focus_on_load Focus on load
   */
  datePicker(
    action_id: string,
    placeholder?: string,
    initial_date?: string,
    confirm?: IConfirmDialog,
    focus_on_load?: boolean,
  ): IDatePicker {
    if (initial_date && !/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/.test(initial_date)) {
      throw new Error('Initial date should be in the YYYY-MM-DD format only.');
    }
    return {
      type: 'datepicker',
      action_id,
      placeholder: placeholder ? this.composition.plainText(placeholder) : undefined,
      initial_date,
      confirm,
      focus_on_load,
    };
  }

  /**
   * Image element
   * @param image_url Image URL to display
   * @param alt_text Alt text to display
   */
  image(image_url: string, alt_text: string): IImage {
    return {
      type: 'image',
      image_url,
      alt_text,
    };
  }

  /**
   * Static multi select element
   * @param placeholder Placeholder text to display in the multi select
   * @param action_id Action id to identify the multi select
   * @param options Options to display in the multi select
   * @param initial_options Initial options to display in the multi select
   * @param confirm Confirm dialog to display when the multi select is clicked
   * @param max_selected_items Maximum number of items that can be selected in the multi select
   * @param focus_on_load Focus on load
   */
  staticMultiSelect(
    placeholder: string,
    action_id: string,
    options: IOption[],
    initial_options?: IOption[],
    confirm?: IConfirmDialog,
    max_selected_items?: number,
    focus_on_load?: boolean,
  ): IStaticMultiSelect {
    return {
      type: 'multi_static_select',
      placeholder: this.composition.plainText(placeholder),
      action_id,
      options,
      initial_options,
      confirm,
      max_selected_items,
      focus_on_load,
    };
  }

  /**
   * Static multi select using option groups element
   * @param placeholder Placeholder text to display in the multi select
   * @param action_id Action id to identify the multi select
   * @param option_groups Option groups to display in the multi select
   * @param initial_options Initial options to display in the multi select
   * @param confirm Confirm dialog to display when the multi select is clicked
   * @param max_selected_items Maximum number of items that can be selected in the multi select
   * @param focus_on_load Focus on load
   */
  staticMultiSelectGroup(
    placeholder: string,
    action_id: string,
    option_groups: IOptionGroup[],
    initial_options?: IOptionGroup[],
    confirm?: IConfirmDialog,
    max_selected_items?: number,
    focus_on_load?: boolean,
  ): IStaticMultiSelectGroup {
    return {
      type: 'multi_static_select',
      placeholder: this.composition.plainText(placeholder),
      action_id,
      option_groups,
      initial_options,
      confirm,
      max_selected_items,
      focus_on_load,
    };
  }

  /**
   * External data select element
   * @param placeholder Placeholder text to display in the select
   * @param action_id Action id to identify the select
   * @param initial_options Initial options to display in the select
   * @param min_query_length Minimum number of characters required before a search is performed
   * @param confirm Confirm dialog to display when the select is clicked
   * @param max_selected_items Maximum number of items that can be selected in the select
   * @param focus_on_load Focus on load
   */
  externalMultiSelect(
    placeholder: string,
    action_id: string,
    initial_options?: IOption[],
    min_query_length?: number,
    confirm?: IConfirmDialog,
    max_selected_items?: number,
    focus_on_load?: boolean,
  ): IExternalMultiSelect {
    return {
      type: 'multi_external_select',
      placeholder: this.composition.plainText(placeholder),
      action_id,
      initial_options,
      min_query_length,
      confirm,
      max_selected_items,
      focus_on_load,
    };
  }

  /**
   * External data select element using option groups
   * @param placeholder Placeholder text to display in the select
   * @param action_id Action id to identify the select
   * @param initial_options Initial options to display in the select
   * @param min_query_length Minimum number of characters required before a search is performed
   * @param confirm Confirm dialog to display when the select is clicked
   * @param max_selected_items Maximum number of items that can be selected in the select
   * @param focus_on_load Focus on load
   */
  externalMultiSelectGroup(
    placeholder: string,
    action_id: string,
    initial_options?: IOptionGroup[],
    min_query_length?: number,
    confirm?: IConfirmDialog,
    max_selected_items?: number,
    focus_on_load?: boolean,
  ): IExternalMultiSelectGroup {
    return {
      type: 'multi_external_select',
      placeholder: this.composition.plainText(placeholder),
      action_id,
      initial_options,
      min_query_length,
      confirm,
      max_selected_items,
      focus_on_load,
    };
  }

  /**
   * Multi-user select element
   * @param placeholder Placeholder text to display in the select
   * @param action_id Action id to identify the select
   * @param initial_users Initial users to display in the select
   * @param confirm Confirm dialog to display when the select is clicked
   * @param max_selected_items Maximum number of items that can be selected in the select
   * @param focus_on_load Focus on load
   */
  userMultiSelect(
    placeholder: string,
    action_id: string,
    initial_users?: string[],
    confirm?: IConfirmDialog,
    max_selected_items?: number,
    focus_on_load?: boolean,
  ): IUserMultiSelect {
    return {
      type: 'multi_users_select',
      placeholder: this.composition.plainText(placeholder),
      action_id,
      initial_users,
      confirm,
      max_selected_items,
      focus_on_load,
    };
  }

  /**
   * Multi-conversation select element
   * @param placeholder Placeholder text to display in the select
   * @param action_id Action id to identify the select
   * @param initial_conversations Initial conversations to display in the select
   * @param filter Filter conversations by name
   * @param confirm Confirm dialog to display when the select is clicked
   * @param max_selected_items Maximum number of items that can be selected in the select
   * @param default_to_current_conversation Default to current conversation
   * @param focus_on_load Focus on load
   */
  conversationsMultiSelect(
    placeholder: string,
    action_id: string,
    initial_conversations?: string[],
    filter?: IConversationsFilter,
    confirm?: IConfirmDialog,
    max_selected_items?: number,
    default_to_current_conversation?: boolean,
    focus_on_load?: false,
  ): IConversationsMultiSelect {
    return {
      type: 'multi_conversations_select',
      placeholder: this.composition.plainText(placeholder),
      action_id,
      initial_conversations,
      filter,
      confirm,
      max_selected_items,
      default_to_current_conversation,
      focus_on_load,
    };
  }

  /**
   * Multi-channel select element
   * @param placeholder Placeholder text to display in the select
   * @param action_id Action id to identify the select
   * @param initial_channels Initial channels to display in the select
   * @param confirm Confirm dialog to display when the select is clicked
   * @param max_selected_items Maximum number of items that can be selected in the select
   * @param focus_on_load Focus on load
   */
  channelsMultiSelect(
    placeholder: string,
    action_id: string,
    initial_channels?: string[],
    confirm?: IConfirmDialog,
    max_selected_items?: number,
    focus_on_load?: boolean,
  ): IPublicChannelsMultiSelect {
    return {
      type: 'multi_channels_select',
      placeholder: this.composition.plainText(placeholder),
      action_id,
      initial_channels,
      confirm,
      max_selected_items,
      focus_on_load,
    };
  }

  /**
   * Overflow menu element
   * @param action_id Action id to identify the menu
   * @param options Options to display in the menu
   * @param confirm Confirm dialog to display when the menu is clicked
   */
  overflow(action_id: string, options: IOption[], confirm: IConfirmDialog): IOverflow {
    return {
      type: 'overflow',
      action_id,
      options,
      confirm,
    };
  }

  /**
   * Plain text input element
   * @param action_id Action id to identify the input
   * @param placeholder Placeholder text to display in the input
   * @param initial_value Initial value to display in the input
   * @param multiline Multiline input
   * @param min_length minimum length of the input
   * @param max_length maximum length of the input
   * @param dispatch_action_config Dispatch action configuration
   * @param focus_on_load Focus on load
   */
  plainTextInput(
    action_id: string,
    placeholder?: string,
    initial_value?: string,
    multiline?: boolean,
    min_length?: number,
    max_length?: number,
    dispatch_action_config?: IDispatchAction,
    focus_on_load?: boolean,
  ): IPlainTextInput {
    return {
      type: 'plain_text_input',
      action_id,
      placeholder: placeholder ? this.composition.plainText(placeholder) : undefined,
      initial_value,
      multiline,
      min_length,
      max_length,
      dispatch_action_config,
      focus_on_load,
    };
  }

  /**
   * Radio button group
   * @param action_id Action id to identify the radio button group
   * @param options Options to display in the radio button group
   * @param initial_option Initial option to display in the radio button group
   * @param confirm Confirm dialog to display when the radio button group is clicked
   * @param focus_on_load Focus on load
   */
  radioButtonGroup(
    action_id: string,
    options: IOption[],
    initial_option?: IOption,
    confirm?: IConfirmDialog,
    focus_on_load?: boolean,
  ): IRadioButtonGroup {
    return {
      type: 'radio_buttons',
      action_id,
      options,
      initial_option,
      confirm,
      focus_on_load,
    };
  }

  /**
   * Static select element
   * @param placeholder Placeholder text to display in the select
   * @param action_id Action id to identify the select
   * @param options Options to display in the select
   * @param initial_option Initial option to display in the select
   * @param confirm Confirm dialog to display when the select is clicked
   * @param focus_on_load Focus on load
   */
  staticSelect(
    placeholder: string,
    action_id: string,
    options: IOption[],
    initial_option?: IOption,
    confirm?: IConfirmDialog,
    focus_on_load?: boolean,
  ): IStaticSelect {
    return {
      type: 'static_select',
      placeholder: this.composition.plainText(placeholder),
      action_id,
      options,
      initial_option,
      confirm,
      focus_on_load,
    };
  }

  /**
   * Static select with option groups element
   * @param placeholder Placeholder text to display in the select
   * @param action_id Action id to identify the select
   * @param option_groups Option groups to display in the select
   * @param initial_option Initial option to display in the select
   * @param confirm Confirm dialog to display when the select is clicked
   * @param focus_on_load Focus on load
   */
  staticSelectGroup(
    placeholder: string,
    action_id: string,
    option_groups: IOptionGroup[],
    initial_option?: IOptionGroup,
    confirm?: IConfirmDialog,
    focus_on_load?: boolean,
  ): IStaticSelectGroup {
    return {
      type: 'static_select',
      placeholder: this.composition.plainText(placeholder),
      action_id,
      option_groups,
      initial_option,
      confirm,
      focus_on_load,
    };
  }

  /**
   * External select element
   * @param placeholder Placeholder text to display in the select
   * @param action_id Action id to identify the select
   * @param initial_option Initial option to display in the select
   * @param min_query_length Minimum query length to start searching
   * @param confirm Confirm dialog to display when the select is clicked
   * @param focus_on_load Focus on load
   */
  externalSelect(
    placeholder: string,
    action_id: string,
    initial_option: IOption,
    min_query_length?: number,
    confirm?: IConfirmDialog,
    focus_on_load?: boolean,
  ): IExternalSelect {
    return {
      type: 'external_select',
      placeholder: this.composition.plainText(placeholder),
      action_id,
      initial_option,
      min_query_length,
      confirm,
      focus_on_load,
    };
  }

  /**
   * External select with option groups element
   * @param placeholder Placeholder text to display in the select
   * @param action_id Action id to identify the select
   * @param initial_option Initial option to display in the select
   * @param min_query_length Minimum query length to start searching
   * @param confirm Confirm dialog to display when the select is clicked
   * @param focus_on_load Focus on load
   */
  externalSelectGroup(
    placeholder: string,
    action_id: string,
    initial_option: IOptionGroup,
    min_query_length?: number,
    confirm?: IConfirmDialog,
    focus_on_load?: boolean,
  ): IExternalSelectGroup {
    return {
      type: 'external_select',
      placeholder: this.composition.plainText(placeholder),
      action_id,
      initial_option,
      min_query_length,
      confirm,
      focus_on_load,
    };
  }

  /**
   * User select element
   * @param placeholder Placeholder text to display in the select
   * @param action_id Action id to identify the select
   * @param initial_user Initial user to display in the select
   * @param confirm Confirm dialog to display when the select is clicked
   * @param focus_on_load Focus on load
   */
  userSelect(
    placeholder: string,
    action_id: string,
    initial_user?: string,
    confirm?: IConfirmDialog,
    focus_on_load?: boolean,
  ): IUserSelect {
    return {
      type: 'users_select',
      placeholder: this.composition.plainText(placeholder),
      action_id,
      initial_user,
      confirm,
      focus_on_load,
    };
  }

  /**
   * Conversations select element
   * @param placeholder Placeholder text to display in the select
   * @param action_id Action id to identify the select
   * @param initial_conversation Initial conversation to display in the select
   * @param filter Filter conversations to display in the select
   * @param confirm Confirm dialog to display when the select is clicked
   * @param response_url_enabled Enable response url
   * @param default_to_current_conversation Default to current conversation
   * @param focus_on_load Focus on load
   */
  conversationSelect(
    placeholder: string,
    action_id: string,
    initial_conversation?: string,
    filter?: IConversationsFilter,
    confirm?: IConfirmDialog,
    response_url_enabled?: boolean,
    default_to_current_conversation?: boolean,
    focus_on_load?: boolean,
  ): IConversationsSelect {
    return {
      type: 'conversations_select',
      placeholder: this.composition.plainText(placeholder),
      action_id,
      initial_conversation,
      filter,
      confirm,
      response_url_enabled,
      default_to_current_conversation,
      focus_on_load,
    };
  }

  /**
   * Channels select element
   * @param placeholder Placeholder text to display in the select
   * @param action_id Action id to identify the select
   * @param initial_channel Initial channel to display in the select
   * @param confirm Confirm dialog to display when the select is clicked
   * @param response_url_enabled Enable response url
   * @param focus_on_load Focus on load
   */
  channelSelect(
    placeholder: string,
    action_id: string,
    initial_channel?: string,
    confirm?: IConfirmDialog,
    response_url_enabled?: boolean,
    focus_on_load?: boolean,
  ): IPublicChannelsSelect {
    return {
      type: 'channels_select',
      placeholder: this.composition.plainText(placeholder),
      action_id,
      initial_channel,
      response_url_enabled,
      confirm,
      focus_on_load,
    };
  }

  /**
   * Time picker element
   * @param action_id Action id to identify the time picker
   * @param placeholder Placeholder text to display in the time picker
   * @param initial_time Initial time to display in the time picker in HH:MM format
   * @param confirm Confirm dialog to display when the time picker is clicked
   * @param focus_on_load Focus on load
   */
  timepicker(
    action_id: string,
    placeholder?: string,
    initial_time?: string,
    confirm?: IConfirmDialog,
    focus_on_load?: boolean,
  ): ITimePicker {
    if (initial_time && !/^([01]\d|2[0-3]):?([0-5]\d)$/.test(initial_time)) {
      throw new Error('Initial time should be in HH:mm format');
    }
    return {
      type: 'timepicker',
      action_id,
      placeholder: placeholder ? this.composition.plainText(placeholder) : undefined,
      initial_time,
      confirm,
      focus_on_load,
    };
  }
}

export default Elements;
