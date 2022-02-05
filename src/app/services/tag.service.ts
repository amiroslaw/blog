import {Injectable} from '@angular/core';
import {ScullyRoute, ScullyRoutesService} from '@scullyio/ng-lib';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import * as global from '../services/globals';
import {Tag, TagWeight} from '../types/types';
import {ScullyContentService} from './scully-content.service';

@Injectable({
  providedIn: 'root',
})
export class TagService {
  constructor(private contentService: ScullyContentService, private scully: ScullyRoutesService) {
  }

  getTagPosts(tag: string): Observable<ScullyRoute[]> {
    return this.contentService.getBlogPosts().pipe(
      map((blogs) =>
        blogs.filter((blog) => blog.tags.some((t) => t === tag))
      )
    );
  }

  getArticleTags(tags: string[]): Map<string, string> {
    const tagsMap = new Map();
    for (const tag of tags) {
      tagsMap.set(tag, global.tagsName.get(tag));
    }
    return tagsMap;
  }

  getPostTags(): Observable<Tag[]> {
    return this.scully.getCurrent().pipe(
      map(routeInfo => routeInfo.tags
      .map(e => new Tag(e, global.tagsName.get(e))
      ))
    );
  }

  getAllTags(): TagWeight[] {
    const tagMaps$ = this.contentService.getFilterRoute(this.scully.available$, '/blog/').pipe(
      map(posts => posts
        .map(post => post.tags)
        .reduce((cur, acc) => cur.concat(acc))
        .reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map())
      )
    );

    const tags = [];
    tagMaps$.subscribe(
      tagMap => new Map([...tagMap.entries()].sort((a: number, b: number) => b[1] - a[1]))
      .forEach((k: number, v: string) => tags.push(new TagWeight(v, global.tagsName.get(v), k)))
    );
    return tags;
  }
}
