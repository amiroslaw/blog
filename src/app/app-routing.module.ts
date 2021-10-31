import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from './not-found/not-found.component';

const routes: Routes = [
  {path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule)},
  {path: 'blog/', redirectTo: '/blog', pathMatch: 'full'},
  {path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule)},
  {path: 'portfolio', loadChildren: () => import('./portfolio/portfolio.module').then(m => m.PortfolioModule)},
  // old url from different website
  {path: 'autor/portfolio', loadChildren: () => import('./portfolio/portfolio.module').then(m => m.PortfolioModule)},
  {path: '404', component: NotFoundComponent},
  // { path: 'tags/:slug', component: TagsComponent},
  { path: 'tags', loadChildren: () => import('./tags/tags.module').then(m => m.TagsModule) },
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
