import {Component, OnInit} from '@angular/core';
import {ScullyContentService} from '../services/scully-content.service';
import {Observable} from 'rxjs';
import {ScullyRoute} from '@scullyio/ng-lib';
import {map} from 'rxjs/operators';
import {flatMap} from 'rxjs/internal/operators';
import {TagWeight} from '../types/types';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  posts$: Observable<ScullyRoute[]>;
  allTags: TagWeight[];
  slug$: Observable<string>;
  slugTitle$: Observable<string[]>;

  constructor(private scullyContent: ScullyContentService) {
  }

  ngOnInit(): void {
    this.slug$ = this.scullyContent.getSlug();
    this.slugTitle$ = this.scullyContent.getSlugTitle(this.slug$);
    this.posts$ = this.scullyContent.getSlugTitle(this.slug$).pipe(
      flatMap(slug => this.scullyContent.getTagPosts(slug[0]))
    );
    this.allTags = this.scullyContent.getAllTags();
  }

  showAllTags(): Observable<boolean> {
    return this.slug$.pipe(
      map(slug => slug === 'tags')
    );
  }
}
