import {Component, OnInit} from '@angular/core';
import {ScullyRoute, ScullyRoutesService} from '@scullyio/ng-lib';
import {map} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';
import { faCalendarAlt} from '@fortawesome/free-regular-svg-icons';
import { faTags} from '@fortawesome/free-solid-svg-icons';

import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts$;

  constructor(private activatedRoute: ActivatedRoute, private scully: ScullyRoutesService, library: FaIconLibrary) {
    library.addIcons(faTags, faCalendarAlt);
  }

  ngOnInit(): void {

    this.posts$ = this.scully.available$.pipe(map(routeList => {
        return routeList
        .filter((route: ScullyRoute) => route.route.startsWith(`/blog/`));
    }));
  }
}

