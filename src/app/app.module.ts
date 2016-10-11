import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ROService} from './services/ro_service';
import {routing} from './app.routing'

import { AppComponent } from './app.component';
import { NotificationsListComponent } from './notifications_list/notifications_list.component';
import { MainPageComponent } from './main_page/main_page.component';


@NgModule({
  declarations: [
    AppComponent,
    NotificationsListComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule,
    routing
  ],
  providers: [
      { provide : LocationStrategy, useClass : HashLocationStrategy},
    ROService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
