
import { registerPlugin, getPluginConfig } from '@scullyio/scully';

const  emojiPlugin = async (html: string): Promise<string> => {
  return html.replace(/\:\)/g, '😊');
};

const validator = async () => [];

registerPlugin('render', 'emoji', emojiPlugin, validator);


