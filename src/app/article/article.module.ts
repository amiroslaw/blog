import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ArticleComponent} from './article.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [ArticleComponent],
  exports: [
    ArticleComponent
  ],
  imports: [
    FontAwesomeModule,
    CommonModule,
    RouterModule
  ]
})
export class ArticleModule { }
