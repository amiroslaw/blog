import {ScullyConfig, setPluginConfig} from '@scullyio/scully';
import {getTocPlugin, TocConfig} from 'scully-plugin-toc';
import { getHttp404Plugin } from '@gammastream/scully-plugin-http404';

import './scully/plugins/emoji.js';
require('@notiz/scully-plugin-medium-zoom');
// 'seoHrefOptimise',
// 'lazyImages',
const Http404Plugin = getHttp404Plugin();
const defaultPostRenderers = [
  'toc',
  'emoji',
  'mediumZoom',
  Http404Plugin
];


// const tocOptions: TocConfig = {
//   insertSelector: '#toc',
//   level: ['h2', 'h3'],
//   trailingSlash: true,
//   scrollIntoViewOnClick: true
// };
// const TocPlugin = getTocPlugin();
//
// setPluginConfig(TocPlugin, tocOptions);

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
  }
};

