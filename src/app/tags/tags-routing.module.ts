import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {TagsComponent} from './tags.component';
const routes: Routes = [
  {path: '', component: TagsComponent},
  {
    path: ':tagId',
    component: TagsComponent
  },
  {path: '**', component: TagsComponent},
  // { path: 'tags/:tagId', loadChildren: () => import('./tags/tags.module').then(m => m.TagsModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TagsRoutingModule {
}
