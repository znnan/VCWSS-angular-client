import { Component, OnInit }                from '@angular/core';
import { Router, ActivatedRoute, ParamMap}  from '@angular/router';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';
import { Observable }                       from 'rxjs/Observable';
import { HttpClient }                   from '@angular/common/http';

import { IndexService }                     from './index.service';

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

@Component({
  selector: 'my-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: [ './carousel.component.scss' ]
})
export class CarouselComponent implements OnInit {
    carouselList: CarouselData;
    private selectedId: number;

    constructor(
        private indexService:   IndexService,
        private route:          ActivatedRoute,
        private router:         Router,
        private http:           HttpClient
    ){}

    ngOnInit():void{
        /*
        this.carouselList = this.route.paramMap
        .switchMap((params: ParamMap) => { 
            this.selectedId = + params.get('id'); 
            return this.indexService.getCarousel()
        });
        */
        /*
        this.carouselList = this.route.paramMap
        .switchMap((params: ParamMap) => {
            this.selectedId = +params.get('id');
            return this.indexService.getCarouselList();
        });
        */
        this.indexService.getCarouselList().subscribe(response => {
            this.carouselList = response;
            console.log(response);
        })
    }

    
}