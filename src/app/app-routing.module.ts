import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LearnComponent} from "./sites/learn/learn.component";
import {AllComponent} from "./sites/all/all.component";
import {StartComponent} from "./sites/start/start.component";

const routes: Routes = [
  { path: '', component: StartComponent },
  { path: 'learn', component: LearnComponent },
  { path: 'all', component: AllComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
