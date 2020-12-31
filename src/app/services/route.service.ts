import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RouteService {
  static BLOG_ROUTE_NAME = 'Blog';
  static HOME_ROUTE = '/home';
  static routesName = new Map([['/blog', 'Blog'], ['/about', 'O mnie'], ['/portfolio', 'Portfolio'], ['/home', 'Blog programistyczny']]);

}

