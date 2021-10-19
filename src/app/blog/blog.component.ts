import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {HighlightService} from '../services/highlight.service';
import {ScullyContentService} from '../services/scully-content.service';
import {TagService} from '../services/tag.service';
import {faCalendarAlt} from '@fortawesome/free-regular-svg-icons';

import {Observable} from 'rxjs';
import {Tag} from '../types/types';
import {map} from 'rxjs/operators';
import {FaIconLibrary} from '@fortawesome/angular-fontawesome';
import {faTags} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated

})
export class BlogComponent implements OnInit {
  postTags$: Observable<Tag[]>;
  postDate$: Observable<any>;

  constructor(private highlightService: HighlightService, private tagService: TagService, private scullyContent: ScullyContentService, library: FaIconLibrary) {
    library.addIcons(faTags, faCalendarAlt);
  }

  ngOnInit(): void {
    this.postTags$ = this.tagService.getPostTags();

    this.postDate$ = this.scullyContent.getCurrent().pipe(
      map(route => route.date)
    );
  }

}
