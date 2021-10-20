import {AfterViewChecked, AfterViewInit, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {HighlightService} from '../services/highlight.service';
import {ScullyContentService} from '../services/scully-content.service';
import {TagService} from '../services/tag.service';
import {faCalendarAlt} from '@fortawesome/free-regular-svg-icons';

import {Observable} from 'rxjs';
import {Tag} from '../types/types';
import {map} from 'rxjs/operators';
import {FaIconLibrary} from '@fortawesome/angular-fontawesome';
import {faTags} from '@fortawesome/free-solid-svg-icons';
import {root} from 'rxjs/internal-compatibility';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated

})
export class BlogComponent implements OnInit, AfterViewChecked, AfterViewInit {
  postTags$: Observable<Tag[]>;
  postDate$: Observable<any>;
  private currentRoute: string;

  constructor(private highlightService: HighlightService, private tagService: TagService, private scullyContent: ScullyContentService, library: FaIconLibrary) {
    library.addIcons(faTags, faCalendarAlt);
  }

  ngOnInit(): void {
    this.postTags$ = this.tagService.getPostTags();

    this.postDate$ = this.scullyContent.getCurrent().pipe(
      map(route => route.date)
    );
  }

  ngAfterViewChecked(): void {
    this.highlightService.highlightAll();
    this.addClassToCodeBlock();
  }
  ngAfterViewInit() {
    this.scullyContent.getCurrent().subscribe(
      current => this.addRouteToTocLinks(current.route)
    );
  }

  private addClassToCodeBlock() {
    const codeBlocks = document.querySelectorAll('div.code-toolbar pre.highlight');
    for (let i = 0; i < codeBlocks.length; i++) {
      codeBlocks[i].classList.add('rainbow-braces', 'match-braces');
    }
  }

  private addRouteToTocLinks(currentRoute: string) {
    const tocLinks = document.querySelectorAll('#toc a');
    for (let i = 0; i < tocLinks.length; i++) {
      let href = tocLinks[i].getAttribute('href');
      tocLinks[i].setAttribute('href', currentRoute + href);
    }
  }
}
