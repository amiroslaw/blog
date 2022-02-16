import {JSDOM} from 'jsdom';
import {HandledRoute, logError, registerPlugin} from '@scullyio/scully';

function toc(dom: JSDOM) {
  const tocLinks = dom.window.document.querySelectorAll('#toc a');

  tocLinks.forEach(i => {
    let href = i.getAttribute('href');
    const onclickAttr = 'document.getElementById(\'' + href.substring(1) + '\').scrollIntoView(); return false;';
    i.setAttribute('onclick', onclickAttr);
  });
}

function admonitions(dom: JSDOM) {
  const admonitionsSVG = new Map<string, string>([
    ['Warning', '<svg style="" viewBox="0 0 24 24"><path fill="currentColor" d="M13 14H11V9H13M13 18H11V16H13M1 21H23L12 2L1 21Z" /></svg>'],
    ['Note', '<svg style="" viewBox="0 0 24 24"> <path fill="currentColor" d="M14,10V4.5L19.5,10M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V9L15,3H5Z" /></svg>'],
    ['Tip', '<svg style="" viewBox="0 0 24 24">    <path fill="currentColor" d="M12,2A7,7 0 0,0 5,9C5,11.38 6.19,13.47 8,14.74V17A1,1 0 0,0 9,18H15A1,1 0 0,0 16,17V14.74C17.81,13.47 19,11.38 19,9A7,7 0 0,0 12,2M9,21A1,1 0 0,0 10,22H14A1,1 0 0,0 15,21V20H9V21Z" /></svg>'],
    ['Caution', '<svg style="" viewBox="0 0 24 24">    <path fill="currentColor" d="M17.66 11.2C17.43 10.9 17.15 10.64 16.89 10.38C16.22 9.78 15.46 9.35 14.82 8.72C13.33 7.26 13 4.85 13.95 3C13 3.23 12.17 3.75 11.46 4.32C8.87 6.4 7.85 10.07 9.07 13.22C9.11 13.32 9.15 13.42 9.15 13.55C9.15 13.77 9 13.97 8.8 14.05C8.57 14.15 8.33 14.09 8.14 13.93C8.08 13.88 8.04 13.83 8 13.76C6.87 12.33 6.69 10.28 7.45 8.64C5.78 10 4.87 12.3 5 14.47C5.06 14.97 5.12 15.47 5.29 15.97C5.43 16.57 5.7 17.17 6 17.7C7.08 19.43 8.95 20.67 10.96 20.92C13.1 21.19 15.39 20.8 17.03 19.32C18.86 17.66 19.5 15 18.56 12.72L18.43 12.46C18.22 12 17.66 11.2 17.66 11.2M14.5 17.5C14.22 17.74 13.76 18 13.4 18.1C12.28 18.5 11.16 17.94 10.5 17.28C11.69 17 12.4 16.12 12.61 15.23C12.78 14.43 12.46 13.77 12.33 13C12.21 12.26 12.23 11.63 12.5 10.94C12.69 11.32 12.89 11.7 13.13 12C13.9 13 15.11 13.44 15.37 14.8C15.41 14.94 15.43 15.08 15.43 15.23C15.46 16.05 15.1 16.95 14.5 17.5H14.5Z" /></svg>'],
    ['Important', '<svg style="" viewBox="0 0 24 24">    <path fill="currentColor" d="M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>']
  ]);

  const icons = dom.window.document.querySelectorAll('td.icon');

  icons.forEach(i => {
    let admonitionType: string = i.textContent.trim();
    i.insertAdjacentHTML('afterbegin', admonitionsSVG.get(admonitionType));
  });

}

const articlePlugin = async (dom: JSDOM, routeData: HandledRoute): Promise<string> => {
  toc(dom);
  admonitions(dom);
  return dom;
};

const validator = async () => [];

registerPlugin('postProcessByDom', 'article', articlePlugin, validator);
