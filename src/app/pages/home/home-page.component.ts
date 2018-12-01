import { Component } from '@angular/core';

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

  constructor() {}

}
