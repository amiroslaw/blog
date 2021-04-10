import {AfterViewChecked, AfterViewInit, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {HighlightService} from '../services/highlight.service';

import mediumZoom from 'medium-zoom';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated

})
export class BlogComponent implements OnInit, AfterViewInit, AfterViewChecked {

  constructor(private highlightService: HighlightService) {
  }

  ngOnInit(): void {
  }

  ngAfterViewChecked(): void {
    this.highlightService.highlightAll();
  }

  ngAfterViewInit(): void {
    mediumZoom('[data-zoomable]');
  }

}
