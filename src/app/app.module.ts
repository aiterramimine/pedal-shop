import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import {HomePageComponent} from './pages/home/home-page.component';
import {PedalCardComponent} from './common-components/pedal-card/pedal-card.component';
import { PluginDetailsComponent } from './pages/plugin-details/plugin-details.component';

const appRoutes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'details/:id', component: PluginDetailsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PedalCardComponent,
    PluginDetailsComponent
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
