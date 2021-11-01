import {Component, Input, OnInit} from '@angular/core';
import {ScullyRoute} from '@scullyio/ng-lib';
import {ScullyContentService} from '../services/scully-content.service';
import {TagService} from '../services/tag.service';
import {FaIconLibrary} from '@fortawesome/angular-fontawesome';
import {faTags} from '@fortawesome/free-solid-svg-icons';
import {faCalendarAlt} from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {

  @Input() article: ScullyRoute;

  constructor(private tagService: TagService, private contentService: ScullyContentService, library: FaIconLibrary) {
    library.addIcons(faTags, faCalendarAlt);
  }

  ngOnInit(): void {
  }

}
