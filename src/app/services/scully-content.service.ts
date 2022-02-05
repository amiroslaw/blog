import {Injectable} from '@angular/core';
import {ScullyRoute, ScullyRoutesService} from '@scullyio/ng-lib';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import * as global from '../services/globals';

@Injectable({
  providedIn: 'root',
})
export class ScullyContentService {
  constructor(private scully: ScullyRoutesService) {}

  getBlogPosts(): Observable<ScullyRoute[]> {
    return this.getFilterRoute(this.scully.available$, '/blog/').pipe(
      map((posts) =>
        posts.sort((p1, p2) =>
          new Date(p1.publishedAt) > new Date(p2.publishedAt) ? -1 : 1
        )
      )
    );
  }

  getCurrent(): Observable<ScullyRoute> {
    return this.scully.getCurrent();
  }

  getLatestBlogPost(): Observable<ScullyRoute> {
    return this.getBlogPosts().pipe(map((posts) => posts[0]));
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

  getFilterRoute(routes: Observable<ScullyRoute[]>, path: string): Observable<ScullyRoute[]> {
    return routes.pipe(
      map((r) => r.filter((route) => route.route.startsWith(path)))
    );
  }

  getMetadata(): Observable<Metadata> {
    return this.getCurrent().pipe(
      map(i => {
          return <Metadata> {
            route: i.route,
            title: i.title,
            description: i.description,
            image: i.photo?.card,
            publishedAt: i.publishedAt,
            tags: i.tags,
            authors: i.authors
          };
        }
      )
    );
  }
}

export interface Metadata {
  title?: string;
  description?: string;
  image?: string;
  route?: string;
  publishedAt: string;
  tags: string[];
  authors: string[];
}
