import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LearnComponent} from "./sites/learn/learn.component";
import {AllComponent} from "./sites/all/all.component";
import {StartComponent} from "./sites/start/start.component";
import {QuizComponent} from "./sites/quiz/quiz.component";
import {StatisticsComponent} from "./sites/statistics/statistics.component";
import {SettingsComponent} from "./sites/settings/settings.component";

const routes: Routes = [
  { path: '', component: StartComponent },
  { path: 'learn', component: LearnComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'stats', component: StatisticsComponent },
  { path: 'all', component: AllComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
