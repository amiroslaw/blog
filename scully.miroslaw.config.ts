import {ScullyConfig, setPluginConfig} from '@scullyio/scully';
import {getHttp404Plugin} from '@gammastream/scully-plugin-http404';
// import '@notiz/scully-plugin-rss';

import {getTocPlugin, TocConfig} from 'scully-plugin-toc';

import './scully/plugins/emoji.js';
import './scully/plugins/tags.js';

const Http404Plugin = getHttp404Plugin();
const defaultPostRenderers = [
  'seoHrefOptimise',
  'toc',
  'emoji',
  Http404Plugin
];


const tocOptions: TocConfig = {
  insertSelector: '#toc',
  level: ['h2', 'h3'],
  trailingSlash: true,
  scrollIntoViewOnClick: true
};
const TocPlugin = getTocPlugin();

setPluginConfig(TocPlugin, tocOptions);

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

