import IPlainText from '../interfaces/composition/IPlainText';
import IMarkdown from '../interfaces/composition/IMarkdown';

class Composition {
  plainText(text: string, emoji = true): IPlainText {
    return { type: 'plain_text', text, emoji };
  }

  markdown(text: string): IMarkdown {
    return { type: 'mrkdwn', text };
  }
}

export default Composition;
