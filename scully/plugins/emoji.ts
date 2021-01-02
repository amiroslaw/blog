
import { registerPlugin, getPluginConfig } from '@scullyio/scully';

const  emojiPlugin = async (html: string): Promise<string> => {
  return  html.replace(/\:\)/g, '😊');
  // html = html.replace(/\:>/g, '😀');
  // html = html.replace(/\;\)/g, '😉');
  // return html;
};

const validator = async () => [];

registerPlugin('render', 'emoji', emojiPlugin, validator);


