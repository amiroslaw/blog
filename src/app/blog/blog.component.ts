import {AfterViewChecked, AfterViewInit, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {HighlightService} from '../services/highlight.service';
import {ScullyContentService} from '../services/scully-content.service';

import mediumZoom from 'medium-zoom';
import {Observable} from 'rxjs';
import {Tag} from '../types/types';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated

})
export class BlogComponent implements OnInit, AfterViewInit, AfterViewChecked {
  postTags$: Observable<Tag[]>;
  postDate$: Observable<any>;

  constructor(private highlightService: HighlightService, private scullyContent: ScullyContentService) {
  }

  ngOnInit(): void {
    this.postTags$ = this.scullyContent.getPostTags();

    this.postDate$ = this.scullyContent.getCurrent().pipe(
      map(route => route.date)
    );
  }

  ngAfterViewChecked(): void {
    this.highlightService.highlightAll();
  }

  ngAfterViewInit(): void {
    mediumZoom('[data-zoomable]');
  }

}
