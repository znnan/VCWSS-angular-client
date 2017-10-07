import { Component, OnInit }                from '@angular/core';
import { Router, ActivatedRoute, ParamMap}  from '@angular/router';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';
import { Observable }                       from 'rxjs/Observable';
import { HttpClient }                   from '@angular/common/http';

import { IndexService, CarouselList }                     from './index.service';

@Component({
  selector: 'my-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: [ './carousel.component.scss' ]
})
export class CarouselComponent implements OnInit {
    carouselList: CarouselList;

    constructor(
        private indexService:   IndexService,
        private route:          ActivatedRoute,
        private router:         Router,
        private http:           HttpClient
    ){}

    ngOnInit():void{
        this.indexService.getCarouselList().subscribe(response => {
            this.carouselList = response;
        })
    }

    
}