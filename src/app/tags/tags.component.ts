import {Component, OnInit} from '@angular/core';
import {ScullyContentService} from '../services/scully-content.service';
import {TagService} from '../services/tag.service';
import {Observable} from 'rxjs';
import {ScullyRoute} from '@scullyio/ng-lib';
import {map} from 'rxjs/operators';
import {mergeMap} from 'rxjs/operators';
import {TagWeight} from '../types/types';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {

  posts$: Observable<ScullyRoute[]>;
  allTags: TagWeight[];
  slug$: Observable<string>;
  slugTitle$: Observable<string[]>;

  constructor(private tagService: TagService, private contentService: ScullyContentService) {
  }

  ngOnInit(): void {
    this.slug$ = this.contentService.getSlug();
    this.slugTitle$ = this.contentService.getSlugTitle(this.slug$);
    this.posts$ = this.contentService.getSlugTitle(this.slug$).pipe(
      mergeMap(slug => this.tagService.getTagPosts(slug[0]))
    );
    this.allTags = this.tagService.getAllTags();
  }

  showAllTags(): Observable<boolean> {
    return this.slug$.pipe(
      map(slug => slug === 'tags')
    );
  }
}
