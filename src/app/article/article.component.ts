import {AfterViewChecked, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {HighlightService} from '../services/highlight.service';
import {ScullyContentService} from '../services/scully-content.service';
import {TagService} from '../services/tag.service';
import {faCalendarAlt, faClock} from '@fortawesome/free-regular-svg-icons';

import {Observable} from 'rxjs';
import {Tag} from '../types/types';
import {map} from 'rxjs/operators';
import {FaIconLibrary} from '@fortawesome/angular-fontawesome';
import {faTags} from '@fortawesome/free-solid-svg-icons';
import {SeoService} from '../services/seo.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated
})
export class ArticleComponent implements OnInit, AfterViewChecked {
  postTags$: Observable<Tag[]>;
  postDate$: Observable<any>;
  readingTime$: Observable<number>;

  constructor(private highlightService: HighlightService, private tagService: TagService, private scullyContent: ScullyContentService, library: FaIconLibrary, private seoService: SeoService) {
    library.addIcons(faTags, faCalendarAlt, faClock);
  }

  ngOnInit(): void {
    this.readingTime$ = this.scullyContent.getCurrent().pipe(
      map(route => route.readingTime)
    );

    this.postTags$ = this.tagService.getPostTags();

    this.postDate$ = this.scullyContent.getCurrent().pipe(
      map(route => route.publishedAt)
    );
    this.seoService.generateMetaTags();
  }

  ngAfterViewChecked(): void {
    this.highlightService.highlightAll();
  }

}
