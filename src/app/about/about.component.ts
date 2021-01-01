import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    trigger('expand', [
      transition(':enter', [
        animate(6000, style({width: '88%'})),
      ])
    ])
  ]
})
export class AboutComponent implements OnInit {
  public isTechnologyDescriptionCollapsed = true;

  constructor() {
  }

  ngOnInit(): void {
  }

}
