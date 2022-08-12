import {Component, OnInit} from '@angular/core';

import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faCircle, faLink, faPlus, faSearchPlus, faTimes} from '@fortawesome/free-solid-svg-icons';
import {FaIconLibrary} from '@fortawesome/angular-fontawesome';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {PortfolioCard, PortfolioModal} from '../types/types';
import {portfolioData} from './portfolioData';
import {UtilService} from '../services/UtilService';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  portfolios: Array<PortfolioCard> = [];

  constructor(private modalService: NgbModal, public utilService: UtilService, library: FaIconLibrary) {
    library.addIcons(faLink, faPlus, faTimes, faCircle, faSearchPlus, faGithub);
  }

  openModal(content): void {
    this.modalService.open(content, {animation: true, centered: true, size: 'lg'});
  }

  ngOnInit(): void {
    this.portfolios = portfolioData;
  }

  isModalType(project): boolean {
    return project instanceof PortfolioModal;
  }

}
