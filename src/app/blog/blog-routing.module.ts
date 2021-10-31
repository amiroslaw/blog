import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {BlogComponent} from './blog.component';
import {HomeComponent} from '../home/home.component';

const routes: Routes = [
//TODO redirect to something else
  {path: '', component: HomeComponent},
  {path: ':slug', component: BlogComponent,},
  {path: '**', component: HomeComponent,}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule {
}

