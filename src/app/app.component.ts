import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pedal-shop';
  profile;

  constructor(private authenticationService : AuthenticationService) {
  }

  signIn() {
    let t = this;
    this.authenticationService.signIn(this);
  }

  signOut() {
    let t = this;
    this.authenticationService.signOut(this);
  }
}
