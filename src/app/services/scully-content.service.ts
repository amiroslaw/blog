import {Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {ScullyRoute, ScullyRoutesService} from '@scullyio/ng-lib';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import * as global from '../services/globals';
import {Tag, TagWeight} from '../types/types';

@Injectable({
  providedIn: 'root',
})
export class ScullyContentService {
  constructor(private scully: ScullyRoutesService, private router: Router) {
  }

  blogPosts(): Observable<ScullyRoute[]> {
    return filterRoute(this.scully.available$, '/blog/').pipe(
      map((posts) =>
        posts.sort((p1, p2) =>
          new Date(p1.date) > new Date(p2.date) ? -1 : 1
        )
      )
    );
  }

  getCurrent(): Observable<ScullyRoute> {
    return this.scully.getCurrent();
  }

  latestBlogPost(): Observable<ScullyRoute> {
    return this.blogPosts().pipe(map((posts) => posts[0]));
  }

  getSlug(): Observable<string> {
    return this.getCurrent().pipe(
      map(routeInfo => {
          if (routeInfo) {
            const pathsRoute = routeInfo.route.split('/');
            return pathsRoute[pathsRoute.length - 1];
          }
          return '';
        }
      )
    );
  }

  getSlugTitle(slug$: Observable<string>): Observable<string[]> {
    return slug$.pipe(
      map(slug => [...global.tagsName.entries()]
        .filter(({1: v}) => v === slug)
        .map(([k]) => k)
      )
    );
  }

  getTagPosts(tag: string): Observable<ScullyRoute[]> {
    return this.blogPosts().pipe(
      map((blogs) =>
        blogs.filter((blog) => blog.tags.some((t) => t === tag))
      )
    );
  }

  getPostTags(): Observable<Tag[]> {
    return this.scully.getCurrent().pipe(
      map(routeInfo => routeInfo.tags
      .map(e => new Tag(e, global.tagsName.get(e))
      ))
    );
  }

  getAllTags(): TagWeight[] {
    const tagMaps$ = filterRoute(this.scully.available$, '/blog/').pipe(
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

export const filterRoute = (routes: Observable<ScullyRoute[]>, path: string): Observable<ScullyRoute[]> => {
  return routes.pipe(
    map((r) => r.filter((route) => route.route.startsWith(path)))
  );
};
