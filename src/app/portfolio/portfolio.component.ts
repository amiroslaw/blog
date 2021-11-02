import {Component, OnInit} from '@angular/core';

import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faCircle, faLink, faPlus, faSearchPlus, faTimes} from '@fortawesome/free-solid-svg-icons';
import {ScullyRoutesService} from '@scullyio/ng-lib';
import {FaIconLibrary} from '@fortawesome/angular-fontawesome';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {PortfolioCard, PortfolioModal} from '../types/types';
import {appsData} from './portfolioData';

interface PortfolioComponentb {
  ngOnInit(): void;
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit, PortfolioComponentb {
  apps: Array<PortfolioCard> = [];

  constructor(private modalService: NgbModal, private scully: ScullyRoutesService, library: FaIconLibrary) {
    library.addIcons(faLink, faPlus, faTimes, faCircle, faSearchPlus, faGithub);
  }

  openModal(content): void {
    this.modalService.open(content, {size: 'xl'});
  }

  ngOnInit(): void {
    this.apps = appsData;
  }

  isModalType(project): boolean {
    return project instanceof PortfolioModal;
  }

}
