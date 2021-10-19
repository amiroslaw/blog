import {AfterViewChecked, AfterViewInit, Component, OnInit, ViewChildren, ViewEncapsulation} from '@angular/core';
import {HighlightService} from '../services/highlight.service';
import {ScullyContentService} from '../services/scully-content.service';
import {TagService} from '../services/tag.service';
import {faCalendarAlt} from '@fortawesome/free-regular-svg-icons';

import mediumZoom from 'medium-zoom';
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
export class BlogComponent implements OnInit, AfterViewChecked{
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

  ngAfterViewChecked(): void {
    //TODO remove?
    this.highlightService.highlightAll();
  }

  ngAfterViewInit(): void {
    const zoom = mediumZoom('[data-zoomable]');
    const images = document.getElementsByTagName('img');
    for (let i = 0; i < images.length; i++) {
      images[i].classList.add('medium-zoom-image')
    }
    console.log(images)
    // console.log(zoom)
  }

}
