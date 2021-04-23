import {AfterViewChecked, AfterViewInit, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {HighlightService} from '../services/highlight.service';
import {ScullyContentService} from '../services/scully-content.service';

import mediumZoom from 'medium-zoom';
import {Observable} from 'rxjs';
import {Tag} from '../types/types';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated

})
export class BlogComponent implements OnInit, AfterViewInit, AfterViewChecked {
  postTags$: Observable<Tag[]>;

  constructor(private highlightService: HighlightService, private scullyContent: ScullyContentService) {
  }

  ngOnInit(): void {
    this.postTags$ = this.scullyContent.getPostTags();
    this.postTags$.subscribe(e => console.log(e));
  }

  ngAfterViewChecked(): void {
    this.highlightService.highlightAll();
  }

  ngAfterViewInit(): void {
    mediumZoom('[data-zoomable]');
  }

}
