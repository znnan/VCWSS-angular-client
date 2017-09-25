import { Component, OnInit }                from '@angular/core';
import { Router, ActivatedRoute, ParamMap}  from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Observable }                       from 'rxjs/Observable';

import { NewsService }                      from './news.service';

import { News }                             from './news';

@Component({
    selector:'news-list',
    templateUrl: './news-list.component.html',
    styleUrls: ['./news-list.component.scss'],
})

export class NewsListComponent implements OnInit {
    newsList: Observable<News[]>;

    private selectedId: number;
    
    constructor(
        private route:      ActivatedRoute,
        private router:     Router,
        private service:    NewsService
    ){}

    ngOnInit():void {
        this.service.getNewsList();
        this.newsList = this.route.paramMap
        .switchMap((params: ParamMap) => {
            this.selectedId = +params.get('id');
            return this.service.getNewsList();
        });
    }

    isSelected(news: News) { return news.id === this.selectedId }

    gotoDetail(news: News){
        let link = ['/news',news.id];
        this.router.navigate(link);
    }

    private newFunction() {
        return this.newsList;
    }
}