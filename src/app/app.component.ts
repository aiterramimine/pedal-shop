import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pedal-shop';
  profile;


  signIn() {

    let t = this;
    var auth2 = gapi.auth2.getAuthInstance();

    // Sign-In
    auth2.signIn()
    .then(googleUser => {
      t.profile = googleUser.getBasicProfile();
      console.log(t.profile)
    });
  }

  signOut() {
    let t = this;

    gapi.auth2.getAuthInstance().signOut().then(function() {
      t.profile = undefined;
      console.log(t.profile === undefined)
    });
    console.log(this.profile === undefined)
    window.location.reload();
  }
}
