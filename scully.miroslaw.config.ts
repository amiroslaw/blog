import {ScullyConfig, setPluginConfig} from '@scullyio/scully';
import {getHttp404Plugin} from '@gammastream/scully-plugin-http404';

import './scully/plugins/emoji.js';
import './scully/plugins/tags.js';

require('@notiz/scully-plugin-medium-zoom');
require('@notiz/scully-plugin-lazy-images');

const Http404Plugin = getHttp404Plugin();
const defaultPostRenderers = [
  'seoHrefOptimise',
  'lazyImages',
  'emoji',
  'zoom',
  'mediumZoom',
  Http404Plugin
];

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'miroslaw',
  outDir: './dist/static',
  defaultPostRenderers,
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: './blog'
      },
      postRenderers: [...defaultPostRenderers]
    },
    '/tags/:tagId': {
      type: 'tagsPlugin',
      postRenderers: [Http404Plugin]
    }
  },
};

