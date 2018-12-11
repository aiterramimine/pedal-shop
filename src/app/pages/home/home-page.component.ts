import { Component, OnInit } from '@angular/core';
import { PluginService } from '../../plugin.services';
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

  constructor(private pluginService: PluginService) {}

  ngOnInit() {
    this.pluginService.sayHello();
    this.pluginService.getListPedals();
  }

}
