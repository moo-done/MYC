import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './page/intro/intro.component';
import { NaviComponent } from './navi/navi.component';
import { PageListComponent } from './navi/page-list/page-list.component';
import { UserPageListComponent } from './navi/user-page-list/user-page-list.component';
import { AboutUsComponent } from './page/about-us/about-us.component';
import { MenuComponent } from './page/menu/menu.component';
import { BoardComponent } from './page/board/board.component';
import { ContractComponent } from './page/contract/contract.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    NaviComponent,
    PageListComponent,
    UserPageListComponent,
    AboutUsComponent,
    MenuComponent,
    BoardComponent,
    ContractComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
