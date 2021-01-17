import {Router, NavigationEnd, RouteConfigLoadEnd} from '@angular/router';
import {Injectable} from '@angular/core';
import {ScullyRoutesService, ScullyRoute} from '@scullyio/ng-lib';
import {
  map,
  switchMap,
  tap,
  reduce,
  filter,
  startWith,
  share,
} from 'rxjs/operators';
import {Observable, zip, concat} from 'rxjs';

// import {TagWeight} from '../types/types';

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

  getAllTags(): Observable<string[]> {
    const tagMaps$ = filterRoute(this.scully.available$, '/blog/')
    .pipe(
      map(posts => posts
        .map(post => post.tags)
        .reduce((cur, acc) => cur.concat(acc))
      )
    );

    return tagMaps$.pipe(
      map(tags => tags.filter((tag, index) => tags.indexOf(tag) === index)
      )
    );
  }

  getTagPosts(tag: string): Observable<ScullyRoute[]> {
    const blogPosts$ = this.blogPosts();
    return blogPosts$.pipe(
      map((blogs) =>
        blogs.filter((blog) => blog.tags.some((t) => t === tag))
      )
    );
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

  // tagPosts(tag: Observable<ScullyRoute>): Observable<ScullyRoute[]> {
  //   const blogPosts = this.posts();
  //   return tag.pipe(
  //     switchMap((page) =>
  //       blogPosts.pipe(
  //         map((blogs) =>
  //           blogs.filter((blog) => blog.tags.some((t) => t === page.title))
  //         )
  //       )
  //     )
  //   );
  // }

  // weightedTags(
  //   blogPosts$: Observable<ScullyRoute[]>,
  //   tags$: Observable<ScullyRoute[]>
  // ): Observable<TagWeight[]> {
  //   const used$: Observable<number> = blogPosts$.pipe(
  //     map((blogs) =>
  //       blogs.map((blog) => (blog.tags || []).length).reduce((a, b) => a + b, 0)
  //     )
  //   );
  //
  //   return blogPosts$.pipe(
  //     switchMap((blogs) =>
  //       tags$.pipe(
  //         map((tags) =>
  //           tags.map((tag) => ({
  //             tag,
  //             count: blogs.filter((blog) =>
  //               (blog.tags || []).some((t) => t === tag.title)
  //             ).length,
  //           }))
  //         ),
  //         switchMap((counts) =>
  //           used$.pipe(
  //             map((used) =>
  //               counts.map((count) => ({
  //                 tag: count.tag,
  //                 weight: (count.count / used) * 100,
  //               }))
  //             )
  //           )
  //         )
  //       )
  //     )
  //   );
  // }

}

export const filterRoute = (routes: Observable<ScullyRoute[]>, path: string): Observable<ScullyRoute[]> => {
  return routes.pipe(
    map((r) => r.filter((route) => route.route.startsWith(path)))
  );
};
