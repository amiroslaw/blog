import {Component, OnInit} from '@angular/core';

import {faGithub, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import {faCircle, faEnvelope, faRss} from '@fortawesome/free-solid-svg-icons';
import {ActivatedRoute} from '@angular/router';
import {ScullyRoutesService} from '@scullyio/ng-lib';
import {FaIconLibrary} from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  currentYear;

  constructor(private activatedRoute: ActivatedRoute, private scully: ScullyRoutesService, library: FaIconLibrary) {
    library.addIcons(faRss, faLinkedinIn, faGithub, faCircle, faEnvelope);
  }

  ngOnInit(): void {
   this.currentYear = new Date().getFullYear();
  }

}
