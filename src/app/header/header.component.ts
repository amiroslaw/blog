import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ScullyRoute} from '@scullyio/ng-lib';
import {RouteService} from '../services/route.service';
import {KeyValue} from '@angular/common';
import {ScullyContentService} from '../services/scully-content.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isCollapsed: boolean;
  headerTitle: string;
  routeInfo$: Observable<ScullyRoute> = this.contentService.getCurrent();
  photo: string;
  routesNavigation: Map<string, string>;

  constructor(private contentService: ScullyContentService) {
    this.isCollapsed = true;
  }

  ngOnInit(): void {
    this.routeInfo$.subscribe((routeInfo) => {
      this.headerTitle = this.getHeaderTitle(routeInfo);
      this.photo = this.getPhoto(routeInfo);
    });

    this.routesNavigation = this.getRoutesNavigation();
  }

  originalOrder = (a: KeyValue<string, string>, b: KeyValue<string, string>): number => {
    return 0;
  };

  private getRoutesNavigation(): Map<string, string> {
    const routesNavigation = new Map(RouteService.routesName);
    routesNavigation.delete('/home');
    return routesNavigation;
  }

  private getHeaderTitle(routeInfo): string {
    if (!routeInfo) {
      return RouteService.BLOG_ROUTE_NAME;
    }

    const route = routeInfo.route;
    if (route.includes('/blog/')) {
      return routeInfo.title;
    } else {
      return this.getRouteName(route);
    }
  }

  private getPhoto(routeInfo): string {
    let defaultPhoto = 'assets/img/sites/home-bg.jpg';
    console.log(this.hasAvifSupport());
    if (!routeInfo) {
      return defaultPhoto;
    }

    const route = routeInfo.route;
    if (route.includes('/blog/') && routeInfo.photo.header) {
      defaultPhoto = routeInfo.photo.header;
    }
    if (this.hasAvifSupport()) {
      return defaultPhoto.split('.')[0] + '.avif';
    } else {
      return defaultPhoto
    }
  }

  private getRouteName(route: string): string {
    if (RouteService.routesName.has(route)) {
      return RouteService.routesName.get(route);
    } else {
      return RouteService.routesName.get(RouteService.HOME_ROUTE);
    }
  }

  private hasAvifSupport() {
    const elem = document.createElement('canvas');

    if (!!(elem.getContext && elem.getContext('2d'))) {
      // was able or not to get WebP representation
      return elem.toDataURL('image/avif').indexOf('data:image/avif') == 0;
    } else {
      return false;
    }
  }
}

