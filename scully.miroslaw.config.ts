import {ScullyConfig, setPluginConfig} from '@scullyio/scully';
import {getHttp404Plugin} from '@gammastream/scully-plugin-http404';
import '@notiz/scully-plugin-rss';
import {timeToRead, timeToReadOptions} from 'scully-plugin-time-to-read';
import scully_plugin_page_title from 'scully-plugin-page-title';

import './scully/plugins/emoji.js';
import './scully/plugins/tags.js';
import './scully/plugins/article.js';

setPluginConfig(timeToRead, {
  path: '/blog/',
} as timeToReadOptions);

const Http404Plugin = getHttp404Plugin();
const defaultPostRenderers = [
  'changeTitlePlugin',
  'seoHrefOptimise',
  'emoji',
  'article',
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

