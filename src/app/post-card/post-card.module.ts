import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PostCardComponent} from './post-card.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [PostCardComponent],
  exports: [
    PostCardComponent
  ],
  imports: [
    FontAwesomeModule,
    CommonModule,
    RouterModule
  ]
})
export class PostCardModule { }
