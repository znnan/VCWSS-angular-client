import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { News }             from './news';


@Injectable()
export class NewsService {
    private newsUrl = 'api/newsList';

    constructor(private http: Http) { }

    getNewsList(): Observable<News[]>{
        return this.http.get(this.newsUrl).map(response => response.json().data as News[]);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    getNews(id: number): Observable<News>{
        const url = `${this.newsUrl}/${id}`;
        return this.http.get(url).map(response => response.json().data);
    }
}