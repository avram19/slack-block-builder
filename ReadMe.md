# @avkad17/slack-block-builder

## Getting started

This is a simple package that can be used to create the blocks and views required to interact with users on any Slack surface. This is based on Slack's own [Block Kit Builder](https://app.slack.com/block-kit-builder/).

### Installation

```console
 npm install --save @avkad17/slack-block-builder
```

---

### Usage

```typescript
import SlackBlockBuilder from '@avkad17/slack-block-builder';

const blocks = SlackBlockBuilder.blocks.section(
  'Hello world!',
  'hello_block',
  undefined,
  SlackBlockBuilder.elements.button('Click me!', 'click', 'something', undefined, 'primary'),
);
```

---

### License

@avkad17/slack-block-builder is licensed under the [MIT License](https://github.com/iamkun/dayjs/blob/HEAD/LICENSE).
