import {JSDOM} from 'jsdom';
import {HandledRoute, logError, registerPlugin} from '@scullyio/scully';

function toc(dom: JSDOM) {
  const tocLinks = dom.window.document.querySelectorAll('#toc a');
  if (tocLinks.length > 0) {
    for (let i = 0; i < tocLinks.length; i++) {
      let href = tocLinks[i].getAttribute('href');
      const onclickAttr = 'document.getElementById(\'' + href.substring(1) + '\').scrollIntoView(); return false;';
      tocLinks[i].setAttribute('onclick', onclickAttr);
    }
  }
}

const articlePlugin = async (dom: JSDOM, routeData: HandledRoute): Promise<string> => {
  toc(dom);
  return dom;
};

const validator = async () => [];

registerPlugin('postProcessByDom', 'article', articlePlugin, validator);
