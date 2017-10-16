import { NgModule }                     from '@angular/core';
import { BrowserModule }                from '@angular/platform-browser';
import { FormsModule }                  from '@angular/forms';
import { HttpClientModule }             from '@angular/common/http';
import { BrowserAnimationsModule }      from '@angular/platform-browser/animations';

import { NgbModule }                    from '@ng-bootstrap/ng-bootstrap';
import { Angular2FontawesomeModule }    from 'angular2-fontawesome/angular2-fontawesome';

import { AppComponent }                 from './app.component';
import { AppRoutingModule }             from './app-routing.module';

import { HeaderComponent }              from './navigation-bar/header.component';
import { IndexModule }                  from './index/index.module';
import { NewsModule }                   from './news/news.module';
import { ContactModule }                from './contact/contact.module';
import { LoginRoutingModule }           from './login-routing.module';
import { LoginComponent }               from './login.component';

import { PageNotFoundComponent}         from './not-found.component'

import { DialogService }                from './dialog.service';
import { MockDbService }                from './mock-data';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HeaderComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(MockDbService),
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    Angular2FontawesomeModule,
    IndexModule,
    NewsModule,
    ContactModule,
    LoginRoutingModule,
    AppRoutingModule,
  ],
  providers: [DialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
