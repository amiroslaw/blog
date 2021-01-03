import {Component, OnInit} from '@angular/core';
import {faCalendarAlt} from '@fortawesome/free-regular-svg-icons';
import {faTags} from '@fortawesome/free-solid-svg-icons';

import {FaIconLibrary} from '@fortawesome/angular-fontawesome';
import {ScullyContentService} from '../services/scully-content.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts$;

  constructor(private scullyContentService: ScullyContentService, library: FaIconLibrary) {
    library.addIcons(faTags, faCalendarAlt);
  }

  ngOnInit(): void {
    this.posts$ = this.scullyContentService.blogPosts();
  }
}
