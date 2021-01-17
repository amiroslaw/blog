import {Component, Input, OnInit} from '@angular/core';
import {ScullyRoute} from '@scullyio/ng-lib';
import {ScullyContentService} from '../services/scully-content.service';
import {FaIconLibrary} from '@fortawesome/angular-fontawesome';
import {faTags} from '@fortawesome/free-solid-svg-icons';
import {faCalendarAlt} from '@fortawesome/free-regular-svg-icons';
import * as global from '../services/globals';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input() article: ScullyRoute;

  constructor(private scullyContentService: ScullyContentService, library: FaIconLibrary) {
    library.addIcons(faTags, faCalendarAlt);
  }

  ngOnInit(): void {
    console.log(this.article);
  }

  getTags(): Map<string, string> {
    const tags = new Map();
    for (const tag of this.article.tags) {
      tags.set(tag, global.tagsName.get(tag));
    }
    return tags;
  }
}
