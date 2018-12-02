import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import {HomePageComponent} from './pages/home/home-page.component';
import {PedalCardComponent} from './common-components/pedal-card/pedal-card.component';

import { from } from 'rxjs';
const appRoutes: Routes = [
  {path: '', component: HomePageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PedalCardComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: false}
    ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
