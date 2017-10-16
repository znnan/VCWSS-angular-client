import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';

import { FooterModule }         from '../footer/footer.module';
import { IndexRoutingModule }   from './index-routing.module';
import { IndexComponent }       from './index.component';
import { CarouselComponent }    from './carousel.component';
import { ArticleListComponent } from './article-list.component';
import { ParallaxComponent }    from './parallax.component';
import { GalleryComponent }     from './gallery.component';
import { BottomComponent }      from './bottom.component';

import { IndexService }         from './index.service';
import { NewsService }          from '../news/news.service';

import { ng2parallax }          from '../directive/parallax.directive'

@NgModule({
    imports: [
      CommonModule,
      IndexRoutingModule,
      FooterModule
    ],
    declarations: [
        IndexComponent,
        CarouselComponent,
        ArticleListComponent,
        ParallaxComponent,
        GalleryComponent,
        BottomComponent,
        ng2parallax
    ],
    providers: [ IndexService, NewsService ]
  })
  export class IndexModule {}