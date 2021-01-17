import {Component, OnInit} from '@angular/core';
import {ScullyContentService} from '../services/scully-content.service';
import {Observable} from 'rxjs';
import {ScullyRoute} from '@scullyio/ng-lib';
import {map} from 'rxjs/operators';
import {flatMap} from 'rxjs/internal/operators';
import * as global from '../services/globals';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  posts$: Observable<ScullyRoute[]>;
  allTags: Map<string, string> = global.tagsName;
  slug$: Observable<string>;

  constructor(private scullyContent: ScullyContentService) {
  }

  ngOnInit(): void {
    this.slug$ = this.scullyContent.getSlug();
    this.posts$ = this.getSlugTitle().pipe(
      flatMap(slug => this.scullyContent.getTagPosts(slug[0]))
    );
    // this.scullyContent.weightedTags(this.posts$, global.tagsName);
  }

  getSlugTitle(): Observable<string[]> {
    return this.slug$.pipe(
      map(slug => [...this.allTags.entries()]
        .filter(({1: v}) => v === slug)
        .map(([k]) => k)
      )
    );
  }

  showAllTags(): Observable<boolean> {
    return this.slug$.pipe(
      map(slug => {
        return slug === 'tags';
      })
    );
  }
}
