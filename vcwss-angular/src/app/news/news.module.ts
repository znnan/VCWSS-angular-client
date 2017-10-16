import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';

import { NewsListComponent }    from './news-list.component';
import { NewsDetailComponent }  from './news-detail.component';

import { NewsRoutingModule }    from './news-routing.module';

import { NewsService }          from './news.service';

@NgModule({
    imports: [
      CommonModule,
      NewsRoutingModule,
    ],
    declarations: [
      NewsListComponent,
      NewsDetailComponent,
    ],
    providers: [ NewsService ]
  })
  export class NewsModule {}