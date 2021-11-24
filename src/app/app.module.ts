import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LearnComponent } from './sites/learn/learn.component';
import { AllComponent } from './sites/all/all.component';
import { NavigationComponent } from './parts/navigation/navigation.component';
import { StartComponent } from './sites/start/start.component';
import { QuizComponent } from './sites/quiz/quiz.component';
import { StatisticsComponent } from './sites/statistics/statistics.component';

@NgModule({
  declarations: [
    AppComponent,
    LearnComponent,
    AllComponent,
    NavigationComponent,
    StartComponent,
    QuizComponent,
    StatisticsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
