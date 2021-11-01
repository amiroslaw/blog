import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ScullyLibModule} from '@scullyio/ng-lib';
import {ArticleRoutingModule} from './article-routing.module';
import {ArticleComponent} from './article.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [ArticleComponent],
  imports: [CommonModule, ArticleRoutingModule, ScullyLibModule, FontAwesomeModule],
})
export class ArticleModule {
}
