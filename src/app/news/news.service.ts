import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

interface MockArticle {
    data: Article
}

interface Article {
    success: boolean;
    data: ArticleData;
}

interface ArticleData {
    count: number;
    pageNo: number;
    pageSize: number;
    list:ArticleList;
}

interface ArticleList {
    id: number;
    title: string;
    subtitle: string;
    priority: number;
    img: string;
}

export interface News extends ArticleList {
    author: string;
    type: number;
    description: string;
    content: string;
    imgSrc: string;
    imgCaption: string;
    update: string;
    releaseDate: string;
}

@Injectable()
export class NewsService {
    private newsUrl = 'api/news';

    constructor(private http: HttpClient) { }

    getNewsList(): Observable<News>{
        return this.http.get<MockArticle>(this.newsUrl).map(response => response.data.data.list);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    getNews(id: number): Observable<News>{
        return this.getNewsList().map(response => response=response[id-1]);
    }
}