import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IntroComponent} from "./intro/intro.component";
import {AboutUsComponent} from "./about-us/about-us.component";

const routes: Routes = [
  {path:'intro', component:IntroComponent},
  {path:'about-us', component:AboutUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
