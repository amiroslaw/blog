"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const scully_1 = require("@scullyio/scully");
const emojiPlugin = async (html) => {
    html = html.replace(/\:\)/g, '😊');
    html = html.replace(/\:>/g, '😀');
    html = html.replace(/\;\)/g, '😉');
    html = html.replace(/\0\)/g, '😉');
    return html;
};
const validator = async () => [];
scully_1.registerPlugin('render', 'emoji', emojiPlugin, validator);
//# sourceMappingURL=emoji.js.map