import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ScullyRoute, ScullyRoutesService} from '@scullyio/ng-lib';
import {RouteService} from '../services/route.service';
import {KeyValue} from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isCollapsed: boolean;
  headerTitle: string;
  routeInfo$: Observable<ScullyRoute> = this.scully.getCurrent();
  photo: string;
  routesNavigation: Map<string, string>;

  constructor(private scully: ScullyRoutesService) {
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
  }

  private getRoutesNavigation(): Map<string, string> {
    const routesNavigation = new Map(RouteService.routesName);
    routesNavigation.delete('/home');
    console.log(routesNavigation);
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
    const defaultPhoto = 'assets/img/sites/home-bg.jpg';
    if (!routeInfo) {
      return defaultPhoto;
    }

    const route = routeInfo.route;
    if (route.includes('/blog/') && routeInfo.photo.header) {
      return routeInfo.photo.header;
    } else {
      return defaultPhoto;
    }
  }

  private getRouteName(route: string): string {
    if (RouteService.routesName.has(route)) {
      return RouteService.routesName.get(route);
    } else {
      return RouteService.routesName.get(RouteService.HOME_ROUTE);
    }
  }
}

