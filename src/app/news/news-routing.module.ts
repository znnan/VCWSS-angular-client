import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewsListComponent }    from './news-list.component';
import { NewsDetailComponent }  from './news-detail.component';
 
const newsRoutes: Routes = [
  { path: 'news', component: NewsListComponent},
  { path: 'news/:id', component: NewsDetailComponent }
];
 
@NgModule({
  imports: [
    RouterModule.forChild(newsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class NewsRoutingModule { }