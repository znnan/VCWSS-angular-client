import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { slideInDownAnimation } from '../animations';

import { NewsService, News }                      from './news.service';
import 'rxjs/add/operator/switchMap';

@Component({
    templateUrl: './news-detail.component.html',
    styleUrls: ['./news-detail.component.scss'],
})

export class NewsDetailComponent implements OnInit {
    news: News;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: NewsService
    ){}
    
    ngOnInit() {
        this.route.paramMap
          .switchMap((params: ParamMap) =>
            this.service.getNews(+params.get('id')))
          .subscribe(response => {
              this.news = response;
              console.log(this.news);
            });
    }

    gotoNews(){
        let newsId = this.news ? this.news.id:null;
        // Pass along the news id if available
        // so that the NewsList component can select that news.
        // Include a junk 'foo' property for fun.
        this.router.navigate(['/news',{id: newsId, foo: 'foo'}]);
    }
}
