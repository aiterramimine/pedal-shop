import { Component, OnInit } from '@angular/core';
import { PluginService } from '../../plugin.services';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

/**
 * This is the home page component.
 */
@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  title = 'WAP Shop';
  welcomeMessage = 'Welcome to the WAP shop';
  pedals;
  query: string = '';

  constructor(private pluginService: PluginService, private router: Router) {
  }

  ngOnInit() {
    this.pedals = this.pluginService.getListPedals().snapshotChanges().pipe(
      map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
    }));
  }

  matches(pedal) {
    return pedal.name.includes(this.query) || (pedal.tags && pedal.tags.toString().includes(this.query));
  }


}
