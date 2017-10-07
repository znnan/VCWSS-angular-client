import { Injectable }                   from '@angular/core';
import { HttpClient }                   from '@angular/common/http';
import { Observable }                   from 'rxjs/Observable';
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
    list:ArticleList | Gallery;
}

interface ArticleList {
    id: number;
    title: string;
    subtitle: string;
    priority: number;
    img: string;
}

export interface CarouselList extends ArticleList {
    url: string;
}

export interface NewsList extends ArticleList {
    author: string;
    type: number;
    description: string;
    imgSrc: string;
    imgCaption: string;
    update: string;
    releaseDate: string;
}

export interface EventList extends ArticleList {
    author: string;
    type: number;
    description: string;
    imgSrc: string;
    imgCaption: string;
    update: string;
    releaseDate: string;
    eventTime: string;
    eventAddress: string;
}

export interface Parallax extends ArticleList {
    title: string;
    subtitle: string;
    bannerId: number;
    img: string;
    url: string;
    releaseTime: string;
}

export interface Gallery {
    id: number;
    album: string;
    albumArt: string;
    galleryImage: string;
    url: string;
    createDate: string;
    updateDate: string;
}

@Injectable()
export class IndexService {
    private carouselUrl = 'api/carousel';
    private newsUrl = 'api/news';
    private eventUrl = 'api/event';
    private parallaxUrl ='api/parallax';
    private galleryUrl = 'api/gallery';

    constructor(private http: HttpClient) { }

    getCarouselList(): Observable<CarouselList>{
        return this.http.get<MockArticle>(this.carouselUrl).map(response => response.data.data.list);
    }

    getNewsList(): Observable<NewsList>{
        return this.http.get<MockArticle>(this.newsUrl).map(response => response.data.data.list);
    }
    
    getEventList(): Observable<EventList>{
        return this.http.get<MockArticle>(this.eventUrl).map(response => response.data.data.list);
    }

    getParallax(): Observable<Parallax>{
        return this.http.get<MockArticle>(this.parallaxUrl).map(response => response.data.data.list);
    }

    getGallery(): Observable<Gallery>{
        return this.http.get<MockArticle>(this.galleryUrl).map(response => response.data.data.list);
    }

}