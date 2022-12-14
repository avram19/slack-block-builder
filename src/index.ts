import Blocks from './blocks';
import Composition from './composition';
import Elements from './elements';
import Views from './views';
import * as Types from './interfaces';

export default {
  blocks: new Blocks(),
  elements: new Elements(),
  composition: new Composition(),
  views: new Views(),
  Types,
};
