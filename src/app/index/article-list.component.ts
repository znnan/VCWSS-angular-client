import { Component, OnInit }                from '@angular/core';
import { Router, ActivatedRoute, ParamMap}  from '@angular/router';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';
import { Observable }                       from 'rxjs/Observable';

import { IndexService, EventList }                     from './index.service';
import { NewsService, News }                           from '../news/news.service';


@Component({
  selector: 'my-articlelist',
  templateUrl: './article-list.component.html',
  styleUrls: [ './article-list.component.scss' ]
})
export class ArticleListComponent implements OnInit {
    newsList: News;
    eventList: EventList;

    constructor(
        private indexService:   IndexService,
        private newsService:    NewsService,
    ){}

    ngOnInit():void{
        this.newsService.getNewsList().subscribe(response =>{
            this.newsList = response;
        })
        this.indexService.getEventList().subscribe(response =>{
            this.eventList = response;
        })
    }

}