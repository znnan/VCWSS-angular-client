import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { FormsModule }                  from '@angular/forms';

import { ContactComponent }     from './contact.component';
import { FooterModule }         from '../footer/footer.module';
import { ContactRoutingModule } from './contact-routing.module'

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      ContactRoutingModule,
      FooterModule
    ],
    declarations: [
        ContactComponent,
    ],
    providers: [ ]
  })
  export class ContactModule {}