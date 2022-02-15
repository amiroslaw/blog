import {Component, OnInit} from '@angular/core';
import {ScullyContentService} from '../services/scully-content.service';
import {SeoService} from '../services/seo.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  posts$;
  search: string;
  tags: Set<string> = new Set<string>();

  constructor(private scullyContentService: ScullyContentService, private seoService: SeoService) {
    this.scullyContentService.getBlogPosts().pipe(
      map(posts => posts
        .map(post => post.tags)
        .reduce((cur, acc) => cur.concat(acc))
      ))
    .subscribe(t => t.forEach(e => this.tags.add(e)));
  }

  ngOnInit(): void {
    this.posts$ = this.scullyContentService.getBlogPosts();
    this.seoService.generateMetaTags();
  }

  onSearch() {
    this.posts$ = this.scullyContentService.getBlogPosts(this.search);
  }
}
