"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const scully_1 = require("@scullyio/scully");
const validator = async () => [];
const zoomPlugin = async (html) => {
    html = html.replace(/<img/g, '<img class="medium-zoom-image"');
    return html;
};
scully_1.registerPlugin('postProcessByHtml', 'zoom', zoomPlugin, validator);
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
//# sourceMappingURL=zoom.js.map