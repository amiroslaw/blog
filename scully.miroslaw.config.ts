import {ScullyConfig} from '@scullyio/scully';
import {getHttp404Plugin} from '@gammastream/scully-plugin-http404';
import '@notiz/scully-plugin-rss';

import './scully/plugins/emoji.js';
import './scully/plugins/tags.js';
import './scully/plugins/article.js';

const Http404Plugin = getHttp404Plugin();
const defaultPostRenderers = [
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

