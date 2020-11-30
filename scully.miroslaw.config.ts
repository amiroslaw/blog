import {ScullyConfig, setPluginConfig} from '@scullyio/scully';
import {getTocPlugin, TocConfig} from 'scully-plugin-toc';

// require('@notiz/scully-plugin-medium-zoom');
//   'mediumZoom'
// 'seoHrefOptimise',
// 'lazyImages',
const defaultPostRenderers = [
  'toc',
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
  }
};

