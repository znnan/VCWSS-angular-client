import { Injectable }                   from '@angular/core';
import { HttpClient }                   from '@angular/common/http';
import { Observable }                   from 'rxjs/Observable';
import 'rxjs/add/operator/map';

interface Carousel {
    success: boolean;
    data: CarouselData;
}

interface CarouselData {
    count: number;
    pageNo: number;
    pageSize: number;
    list: CarouselList;
}

interface CarouselList {
    title: string;
    subtitle: string;
    priority: number;
    img: string;
    url: string;
}

@Injectable()
export class IndexService {
    private carouselUrl = 'api/carousel';

    constructor(private http: HttpClient) { }

    getCarouselList(): Observable<CarouselData>{
        return this.http.get<Carousel>(this.carouselUrl).map(response => response.data as CarouselData);
    }

}