import {Component, OnInit} from '@angular/core';

import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faCircle, faLink, faPlus, faSearchPlus, faTimes} from '@fortawesome/free-solid-svg-icons';
import {ScullyRoutesService} from '@scullyio/ng-lib';
import {FaIconLibrary} from '@fortawesome/angular-fontawesome';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor(private modalService: NgbModal, private scully: ScullyRoutesService, library: FaIconLibrary) {
    library.addIcons(faLink, faPlus, faTimes, faCircle, faSearchPlus, faGithub);
  }

  openModal(content): void {
    this.modalService.open(content, {size: 'xl'});
  }

  ngOnInit(): void {
  }

}
