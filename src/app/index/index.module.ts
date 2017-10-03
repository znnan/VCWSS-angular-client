import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';


import { IndexRoutingModule }   from './index-routing.module';
import { IndexComponent }       from './index.component';
import { CarouselComponent }    from './carousel.component';

import { IndexService }         from './index.service';

@NgModule({
    imports: [
      CommonModule,
      IndexRoutingModule,
    ],
    declarations: [
        IndexComponent,
        CarouselComponent
    ],
    providers: [ IndexService ]
  })
  export class IndexModule {}