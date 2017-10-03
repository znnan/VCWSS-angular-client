import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { News }             from './news';

type Data = { data: any }

@Injectable()
export class NewsService {
    private newsUrl = 'api/newsList';

    constructor(private http: HttpClient) { }

    getNewsList(): Observable<any[]>{
        return this.http.get<Data>(this.newsUrl).map(response => response.data as any[]);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    getNews(id: number): Observable<any>{
        const url = `${this.newsUrl}/${id}`;
        return this.http.get<Data>(url).map(response => response.data as any);
    }
}