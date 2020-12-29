import {AfterViewInit, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Observable} from 'rxjs';
import {ScullyRoute, ScullyRoutesService} from '@scullyio/ng-lib';

import mediumZoom from 'medium-zoom';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated

})
export class BlogComponent implements OnInit, AfterViewInit {
  content$: Observable<ScullyRoute> = this.scully.getCurrent();

  constructor(private scully: ScullyRoutesService) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    mediumZoom('[data-zoomable]');
  }

}
