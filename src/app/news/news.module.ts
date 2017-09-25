import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { HttpModule }           from '@angular/http';

import { NewsListComponent }    from './news-list.component';
import { NewsDetailComponent }  from './news-detail.component';

import { NewsService }          from './news.service';

import { NewsRoutingModule }    from './news-routing.module';

import { NewsListDataService }  from '../mock-data/newsList.mock-data';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

@NgModule({
    imports: [
      CommonModule,
      NewsRoutingModule,
      HttpModule,
      InMemoryWebApiModule.forRoot(NewsListDataService),
    ],
    declarations: [
      NewsListComponent,
      NewsDetailComponent,
    ],
    providers: [ NewsService ]
  })
  export class NewsModule {}