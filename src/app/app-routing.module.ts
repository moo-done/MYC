import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IntroComponent} from "./page/intro/intro.component";
import {AboutUsComponent} from "./page/about-us/about-us.component";
import {MenuComponent} from "./page/menu/menu.component";
import {BoardComponent} from "./page/board/board.component";
import {ContractComponent} from "./page/contract/contract.component";

const routes: Routes = [

  // navi
  {path:'intro', component:IntroComponent},
  {path:'about-us', component:AboutUsComponent},
  {path:'menu', component:MenuComponent},
  {path:'board', component:BoardComponent},
  {path:'contract', component:ContractComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
