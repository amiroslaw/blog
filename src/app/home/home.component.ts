import {Component, OnInit} from '@angular/core';
import {ScullyRoute, ScullyRoutesService} from '@scullyio/ng-lib';
import {map} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts$;

  constructor(private activatedRoute: ActivatedRoute, private scully: ScullyRoutesService) {
  }

  ngOnInit(): void {

    this.posts$ = this.scully.available$.pipe(map(routeList => {
        return routeList
        .filter((route: ScullyRoute) => route.route.startsWith(`/blog/`));
    }));
  }
}

