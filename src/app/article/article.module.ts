import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ScullyLibModule} from '@scullyio/ng-lib';
import {ArticleRoutingModule} from './article-routing.module';
import {ArticleComponent} from './article.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {CommentsDirective} from '../directives/comments.directive';

@NgModule({
    declarations: [ArticleComponent, CommentsDirective],
    imports: [CommonModule, ArticleRoutingModule, ScullyLibModule, FontAwesomeModule],
    exports: [
        ArticleComponent
    ]
})
export class ArticleModule {
}
