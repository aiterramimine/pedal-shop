import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import {HomePageComponent} from './pages/home/home-page.component';

import { from } from 'rxjs';
const appRoutes: Routes = [
  {path: 'home', component: HomePageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent
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
