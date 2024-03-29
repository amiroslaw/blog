import {Component} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
import {Skill} from './skill.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    trigger('expand', [
      transition(':enter', [
        style({width: '8%'}),
        animate(6000, style({width: '{{barWidth}}%'}))
      ], {params: {barWidth: 33}})
    ])
  ]
})
export class AboutComponent {
  public isTechnologyDescriptionCollapsed = true;
  skills: Array<Skill> = Skill.skills;

}
