import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TagsRoutingModule } from './tags-routing.module';
import { TagsComponent } from './tags.component';
import {ArticleModule} from '../article/article.module';


@NgModule({
  declarations: [TagsComponent],
    imports: [
        CommonModule,
        TagsRoutingModule,
        ArticleModule
    ]
})
export class TagsModule { }
