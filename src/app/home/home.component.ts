import {Component, OnInit} from '@angular/core';
import {ScullyContentService} from '../services/scully-content.service';
import {SeoService} from '../services/seo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  posts$;

  constructor(private scullyContentService: ScullyContentService, private seoService: SeoService) {
  }

  ngOnInit(): void {
    this.posts$ = this.scullyContentService.getBlogPosts();
    this.seoService.generateMetaTags();
  }
}
