import { Component, OnInit }            from '@angular/core';
import { NgStyle }                      from '@angular/common';
import { Observable }                   from 'rxjs/Observable';
import { HttpClient }                   from '@angular/common/http';
import { IndexService, Gallery }       from './index.service';

@Component({
    selector: 'my-gallery',
    templateUrl: './gallery.component.html',
    styles:  [`
    .title {
        font-weight: 700;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        font-family: 'Roboto Slab', serif;
        margin-bottom: 20px;
    }
    .slog {
        font-size: 16px;
        max-width: 420px;
        margin: 0 auto;
        margin-bottom: 80px;
    }
    .item-img-wrap{
        position: relative;
        text-align: center;
        overflow: hidden;
    }
    .item-img-wrap img{
        -webkit-transition:all 200ms linear; 
        -moz-transition:all 200ms linear; 
        -o-transition:all 200ms linear; 
        -ms-transition:all 200ms linear; 
        transition:all 200ms linear; 
        -webkit-border-top-left-radius: 5px;
        -webkit-border-top-right-radius: 5px;
        -moz-border-radius-topleft: 5px;
        -moz-border-radius-topright: 5px;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    }
    .item-img-overlay{
        position: absolute;
        width:100%;
        height: 100%;
        left: 0;
        top: 0;
    }
    .item-img-overlay span{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
        filter: alpha(opacity=0);
        opacity: 0;
        -webkit-transition: opacity 250ms linear;
        transition: opacity 250ms linear;
    }
    .item-img-wrap:hover .item-img-overlay span{
        opacity: 1;
    }
    .item-img-wrap:hover img{
        -moz-transform: scale(1.1); 
        -webkit-transform: scale(1.1); 
        -o-transform: scale(1.1); 
        transform: scale(1.1); 
    }
    .work-desc{
        width: 100%;
        padding: 10px 20px;
        border: 1px solid #e3e3e3;
        border-bottom: 2px solid rgba(240,80,80,.7);
        border-top: none;
        -webkit-border-bottom-right-radius: 5px;
        -webkit-border-bottom-left-radius: 5px;
        -moz-border-radius-bottomright: 5px;
        -moz-border-radius-bottomleft: 5px;
        border-bottom-right-radius: 5px;
        border-bottom-left-radius: 5px;
        position: relative;
        background: #f8f8f8;
    }
    .work-desc h3{
        margin: 0;
        padding: 0;
        font-size: 16px;
        font-weight: 700;
        text-transform: capitalize;
        font-family: 'Roboto Slab', serif;
        margin-bottom: 5px;
    }
    .item-img-overlay span{
        background: url(./assets/plus.png) no-repeat center center rgba(240, 80, 80,.7);
    }
    `] ,
  })
  export class GalleryComponent implements OnInit {
      private galleryList:Gallery;
  
      constructor(
          private indexService:   IndexService,
          private http:           HttpClient,
      ){}
  
      ngOnInit():void{
          this.indexService.getGallery().subscribe(response =>{
            this.galleryList = response;
            console.log(response[0].album)
          })
      }
  
      
  }