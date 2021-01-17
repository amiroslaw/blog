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

  blogPosts$: Observable<ScullyRoute[]>;
  allTags: Map<string, string> = global.tagsName;
  slug$: Observable<string>;

  constructor(private scullyContent: ScullyContentService) {
  }

  ngOnInit(): void {
    this.slug$ = this.scullyContent.getSlug();
    this.blogPosts$ = this.slug$.pipe(
      flatMap(slug => this.scullyContent.getTagPosts(slug))
    );
    // this.blogPosts$ = this.scullyContent.getTagPosts(slug$);
    // this.routeInfo$.subscribe(routeInfo => this.getSelectedTag(routeInfo));
    // this.allTags$ = this.scullyContent.getAllTags();
    // this.allTags$.subscribe(value => console.log(value));
  }

  getSlugTitle() {
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
        console.log(slug);
        return slug === 'tags';
      })
    );
  }
}
