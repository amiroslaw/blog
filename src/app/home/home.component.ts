import {Component, OnInit} from '@angular/core';
import {ScullyContentService} from '../services/scully-content.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts$;

  constructor(private scullyContentService: ScullyContentService) {
  }

  ngOnInit(): void {
    this.posts$ = this.scullyContentService.blogPosts();
  }
}
