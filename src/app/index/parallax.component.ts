import { Component, OnInit }            from '@angular/core';
import { Observable }                   from 'rxjs/Observable';
import { HttpClient }                   from '@angular/common/http';
import { NgStyle }                      from '@angular/common';
import { IndexService, Parallax }       from './index.service';

@Component({
  selector: 'my-parallax',
  templateUrl: './parallax.component.html',
  styles:  [`
    .intermediate-container .subheading h4 {
        color: #fff;
        font-style: italic;
        font-family: 'Roboto Slab', serif;
    }
    .intermediate-container .heading h2 {
        font-size: 40px;
        line-height: 47px;
        text-transform: uppercase;
        margin-top: 30px;
        color: #fff;
        margin-bottom: 20px;
        font-weight: 700;
    }
    .btn-parallax{
        border-radius: 3px;
        padding: 0.8em 1.8em;
        color: #fff;
        font-weight: 700;
        -webkit-transition: all .5s ease-out;
        -moz-transition: all .5s ease-out;
        text-transform: uppercase;
        transition: all .5s ease-out;
        background-color: rgba(255,255,255,0.3);
        border-color: #ffffff;
    }
    .btn-parallax:hover{
        background-color: rgba(255,255,255,0.7);
        border-color: #fff;
        color: #ed2a2a;
    }
  `] ,
})
export class ParallaxComponent implements OnInit {
    private parallax:Parallax;
    private backgroundImg;
    private title;
    private subtitle;

    constructor(
        private indexService:   IndexService,
        private http:           HttpClient,
    ){}

    ngOnInit():void{
        this.indexService.getParallax().subscribe(response =>{
            this.parallax = response;
            this.backgroundImg = this.parallax[0].img;
            this.title = this.parallax[0].title;
            this.subtitle = this.parallax[0].subtitle;
        })
    }

    
}