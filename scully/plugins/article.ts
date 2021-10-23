import {JSDOM} from 'jsdom';
import {HandledRoute, logError, registerPlugin} from '@scullyio/scully';

function getWordcount(body: HTMLBodyElement) {
  let content = body.textContent;
  content = content.replace(/(^\s*)|(\s*$)/gi, '');
  content = content.replace(/[ ]{2,}/gi, ' ');
  content = content.replace(/\n /, '\n');
  return content.split(' ').length;
}

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

function addReadingTime(dom: JSDOM) {
  let body = dom.window.document.querySelector('body');
  if (body) {
    const wordcount = getWordcount(body);
    // const readingTimeMin = Math.floor(wordcount/160);
    // const readingTimeSec = (wordcount/160 - readingTimeMin) * 60;
    const readingTimeMin = Math.round(wordcount / 160);
    const post = dom.window.document.querySelector('article.post');
    post.insertAdjacentHTML('afterbegin', `<div id="reading-time"> ${readingTimeMin} min  </div>`);
  }
}

const articlePlugin = async (dom: JSDOM, routeData: HandledRoute): Promise<string> => {
  toc(dom);
  const isArticle = routeData.route.includes('/blog/');
  if (isArticle) {
    addReadingTime(dom);
  }

  return dom;
};

const validator = async () => [];

registerPlugin('postProcessByDom', 'article', articlePlugin, validator);
