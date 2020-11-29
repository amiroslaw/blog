import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Observable} from 'rxjs';
import {ScullyRoute, ScullyRoutesService} from '@scullyio/ng-lib';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated

})
export class BlogComponent implements OnInit {
  content$: Observable<ScullyRoute> = this.scully.getCurrent();

  constructor(private scully: ScullyRoutesService) {
  }

  ngOnInit(): void {
  }

}
