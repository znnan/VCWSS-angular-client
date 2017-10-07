import { Component, OnInit }                from '@angular/core';
import { Router, ActivatedRoute, ParamMap}  from '@angular/router';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';
import { Observable }                       from 'rxjs/Observable';
import { HttpClient }                   from '@angular/common/http';

import { IndexService, NewsList, EventList }                     from './index.service';


@Component({
  selector: 'my-articlelist',
  templateUrl: './article-list.component.html',
  styleUrls: [ './article-list.component.scss' ]
})
export class ArticleListComponent implements OnInit {
    newsList: NewsList;
    eventList: EventList;

    constructor(
        private indexService:   IndexService,
        private route:          ActivatedRoute,
        private router:         Router,
        private http:           HttpClient
    ){}

    ngOnInit():void{
        this.indexService.getNewsList().subscribe(response =>{
            this.newsList = response;
        })

        this.indexService.getEventList().subscribe(response =>{
            this.eventList = response;
        })
    }

    
}