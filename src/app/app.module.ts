import { BrowserModule }                from '@angular/platform-browser';
import { NgModule }                     from '@angular/core';
import { FormsModule }                  from '@angular/forms';
import { HttpModule }                   from '@angular/http';
import { BrowserAnimationsModule }      from '@angular/platform-browser/animations';

import { NgbModule }                    from '@ng-bootstrap/ng-bootstrap';
import { Angular2FontawesomeModule }    from 'angular2-fontawesome/angular2-fontawesome';

import { AppComponent }                 from './app.component';
import { AppRoutingModule }             from './app-routing.module';
import { HeaderComponent }              from './navigation-bar/header.component';
import { IndexComponent }               from './index.component';

import { NewsModule }                   from './news/news.module';

import { PageNotFoundComponent}         from './not-found.component'
/*
import { CarouselComponent }      from './carousel.component';
import { SlideComponent }         from './slide.component';
import { AdComponent }            from './ad.component';
import { GallerySlideComponent }  from './gallery-slide.component';
import { FooterComponent }        from './footer.component';

import { ArticleComponent }       from './article.component';
import { ArticleDetailComponent } from './article-detail.component';
*/

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HeaderComponent,
    IndexComponent,
    //HeaderComponent,
    //CarouselComponent,
    //SlideComponent,
    //AdComponent,
    //GallerySlideComponent,
    //FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    Angular2FontawesomeModule,
    NgbModule.forRoot(),
    FormsModule,
    HttpModule,
    NewsModule,
    AppRoutingModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
