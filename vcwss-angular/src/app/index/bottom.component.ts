import { Component, OnInit }                from '@angular/core';
import { Router, ActivatedRoute, ParamMap}  from '@angular/router';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';
import { Observable }                       from 'rxjs/Observable';
import { HttpClient }                       from '@angular/common/http';


import { IndexService }                     from './index.service';

@Component({
  selector: 'my-bottom',
  templateUrl: './bottom.component.html',
  styleUrls: [ './bottom.component.scss' ]
})
export class BottomComponent implements OnInit {

    constructor(
        private indexService:   IndexService,
        private route:          ActivatedRoute,
        private router:         Router,
        private http:           HttpClient
    ){}

    ngOnInit():void{

    }

    
}