
import {registerPlugin, getPluginConfig, HandledRoute} from '@scullyio/scully';

const validator = async () => [];

const  zoomPlugin = async (html: string): Promise<string> => {
  html = html.replace(/<img/g, '<img class="medium-zoom-image"');
  return html;
};


registerPlugin('postProcessByHtml', 'zoom', zoomPlugin, validator);

// const  zoomPlugin = async (  dom: JSDOM, route: HandledRoute): Promise<string> => {
//   return JSON;
// }
// function zoomPlugin(
//   dom: JSDOM,
//   route: HandledRoute
// ): Promise<string> {
//   return JSMOD;
// }
// registerPlugin('postProcessByDom', 'zoom', zoomPlugin, validator);
