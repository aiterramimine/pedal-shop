import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import {HomePageComponent} from './pages/home/home-page.component';
import {PedalCardComponent} from './common-components/pedal-card/pedal-card.component';
import { PluginDetailsComponent } from './pages/plugin-details/plugin-details.component';
import { PluginCreationComponent} from './pages/plugin-creation/plugin-creation.component';
import { FormsModule }   from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireList } from '@angular/fire/database';
import { environment } from 'src/environments/environment.prod';
import { PluginService } from './plugin.services';

const appRoutes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'details/:id', component: PluginDetailsComponent},
  {path: 'creation', component: PluginCreationComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PedalCardComponent,
    PluginDetailsComponent,
    PluginCreationComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: false}
    ),
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'pedal-shop'),
    AngularFireDatabaseModule
  ],
  providers: [PluginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
