import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';


import { IndexRoutingModule }   from './index-routing.module';
import { IndexComponent }       from './index.component';
import { CarouselComponent }    from './carousel.component';
import { ArticleListComponent } from './article-list.component';
import { ParallaxComponent }    from './parallax.component';
import { GalleryComponent }     from './gallery.component';
import { BottomComponent }      from './bottom.component';
import { FooterComponent }      from '../footer/footer.component';

import { IndexService }         from './index.service';

import { ng2parallax }          from '../directive/parallax.directive'

@NgModule({
    imports: [
      CommonModule,
      IndexRoutingModule,
    ],
    declarations: [
        IndexComponent,
        CarouselComponent,
        ArticleListComponent,
        ParallaxComponent,
        GalleryComponent,
        BottomComponent,
        FooterComponent,
        ng2parallax
    ],
    providers: [ IndexService ]
  })
  export class IndexModule {}