import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { NaviComponent } from './navi/navi.component';
import { PageListComponent } from './navi/page-list/page-list.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    NaviComponent,
    PageListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
