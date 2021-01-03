import {AfterViewInit, Component, OnInit, ViewEncapsulation} from '@angular/core';

import mediumZoom from 'medium-zoom';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated

})
export class BlogComponent implements OnInit, AfterViewInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    mediumZoom('[data-zoomable]');
  }

}
