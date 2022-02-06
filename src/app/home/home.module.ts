import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {PostCardModule} from '../post-card/post-card.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [HomeComponent],
    imports: [
        CommonModule,
        HomeRoutingModule,
        PostCardModule,
        FormsModule
    ]
})
export class HomeModule {
}
