import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TagsRoutingModule } from './tags-routing.module';
import { TagsComponent } from './tags.component';
import {PostCardModule} from '../post-card/post-card.module';


@NgModule({
  declarations: [TagsComponent],
    imports: [
        CommonModule,
        TagsRoutingModule,
        PostCardModule
    ]
})
export class TagsModule { }
