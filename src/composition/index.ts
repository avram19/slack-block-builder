import IPlainText from '../interfaces/composition/IPlainText';
import IMarkdown from '../interfaces/composition/IMarkdown';
import IOption from '../interfaces/composition/IOption';
import IOptionGroup from '../interfaces/composition/IOptionGroup';
import IConfirmDialog from '../interfaces/composition/IConfirmDialog';
import IConversationsFilter from '../interfaces/composition/IConversationsFilter';
import IDispatchAction from '../interfaces/composition/IDispatchAction';

class Composition {
  /**
   * Confirm dialog
   * @param title The title of the confirm dialog
   * @param text The text of the confirm dialog
   * @param confirm The text of the confirm button
   * @param deny The text of the deny button
   * @param style The style of the confirm dialog
   * @param usePlainText Whether to use plain text for the text of the confirm dialog
   */
  confirmDialog(
    title: string,
    text: string,
    confirm: string,
    deny: string,
    style?: 'primary' | 'danger',
    usePlainText = false,
  ): IConfirmDialog {
    return {
      title: this.plainText(title),
      text: usePlainText ? this.plainText(text) : this.markdown(text),
      confirm: this.plainText(confirm),
      deny: this.plainText(deny),
      style,
    };
  }

  /**
   * Filter conversations by type
   * @param include Include conversations of the specified type
   * @param excludeExternalSharedChannels Exclude external shared channels
   * @param excludeBotUsers Exclude bot users
   */
  conversationsFilter(
    include?: ('im' | 'mpim' | 'private' | 'public')[],
    excludeExternalSharedChannels = false,
    excludeBotUsers = false,
  ): IConversationsFilter {
    return {
      include,
      exclude_external_shared_channels: excludeExternalSharedChannels,
      exclude_bot_users: excludeBotUsers,
    };
  }

  /**
   * Dispatch action configuration
   * @param trigger_actions_on Trigger actions on for plain text input
   */
  dispatchAction(trigger_actions_on?: ('on_enter_pressed' | 'on_character_entered')[]): IDispatchAction {
    return { trigger_actions_on };
  }

  /**
   * Markdown text
   * @param text The text of the markdown
   */
  markdown(text: string): IMarkdown {
    return { type: 'mrkdwn', text };
  }

  /**
   * Menu option. Can be used for checkboxes, radio button groups, select menus and overflow menus.
   * @param text The text of the option
   * @param value The value of the option
   * @param description The description of the option
   * @param url The url of the option
   * @param usePlainText Whether to use plain text for the text of the option
   */
  option(text: string, value: string, description?: string, url?: string, usePlainText = false): IOption {
    return {
      text: usePlainText ? this.plainText(text) : this.markdown(text),
      value,
      description: description ? this.plainText(description) : undefined,
      url,
    };
  }

  /**
   * Menu option group. Can be used for select menus and overflow menus
   * @param label The label of the option group
   * @param options The options of the option group
   * @param usePlainText Whether to use plain text for option texts in the option group
   */
  optionGroup(
    label: string,
    options: { text: string; value: string; description?: string; url?: string }[],
    usePlainText = false,
  ): IOptionGroup {
    return {
      label: this.plainText(label),
      options: options.map((option) =>
        this.option(option.text, option.value, option.description, option.url, usePlainText),
      ),
    };
  }

  /**
   * Plain text
   * @param text The text of the plain text
   * @param emoji Whether to render emojis. True by default
   */
  plainText(text: string, emoji = true): IPlainText {
    return { type: 'plain_text', text, emoji };
  }
}

export default Composition;
