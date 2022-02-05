import {AfterViewInit, Directive, ElementRef, Input, Renderer2} from '@angular/core';

@Directive({selector: '[appComments]',})
export class CommentsDirective implements AfterViewInit {
  @Input() appComments = true;

  constructor(
    private readonly renderer: Renderer2,
    private readonly el: ElementRef
  ) {
  }

  ngAfterViewInit() {
    try {
      const scriptEl: HTMLScriptElement = this.renderer.createElement('script');
      scriptEl.src = 'https://utteranc.es/client.js';
      scriptEl.setAttribute('id', 'comments');
      scriptEl.setAttribute('repo', 'amiroslaw/blog-comments');
      scriptEl.setAttribute('issue-term', 'title');
      scriptEl.setAttribute('theme', 'github-light');
      scriptEl.setAttribute('crossorigin', 'anonymous');
      scriptEl.async = true;
      this.renderer.appendChild(this.el.nativeElement, scriptEl);
    } catch (e) {
      console.log('Error adding utterances comments', e);
    }
  }
}
