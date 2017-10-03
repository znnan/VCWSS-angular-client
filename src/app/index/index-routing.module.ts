import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent }    from './index.component';
 
const newsRoutes: Routes = [
  { path: 'index', component: IndexComponent},
];
 
@NgModule({
  imports: [
    RouterModule.forChild(newsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class IndexRoutingModule { }