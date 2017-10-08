import { Component, OnInit }                from '@angular/core';
import { Router, ActivatedRoute, ParamMap}  from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Observable }                       from 'rxjs/Observable';

import { NewsService, News }                from './news.service';

@Component({
    templateUrl: './news-list.component.html',
    styleUrls: ['./news-list.component.scss'],
})

export class NewsListComponent implements OnInit {
    newsList: News;
    private newsId: number;
    
    constructor(
        private route:      ActivatedRoute,
        private router:     Router,
        private service:    NewsService
    ){}

    ngOnInit():void {
        
        this.service.getNewsList().subscribe(response => {
            this.newsList =response;
        })
        /*
        this.route.paramMap.switchMap(params: ParamMap)=>{
            this.newsId = +params.get('id');
        }
        */
        
        this.route.paramMap
        .switchMap((params: ParamMap) => {
            this.newsId = +params.get('id');
            return this.service.getNewsList();
        });
        
    }

    isSelected(news: News){
        return news.id === this.newsId;
    }

    onSelected(news: News) {
        this.newsId = news.id;
        //Navigate with relative link
        this.router.navigate([[news.id], { relativeTo: this.route }]);
    }

    gotoArticle(news: News){
        this.router.navigate(['/news', news.id]);
    }
}