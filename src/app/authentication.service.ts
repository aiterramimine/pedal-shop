import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class AuthenticationService {
    profile: any;

    constructor() {}

    signIn(caller) {
        let t = this;
        var auth2 = gapi.auth2.getAuthInstance();
    
        // Sign-In
        auth2.signIn()
        .then(googleUser => {
          t.profile = googleUser.getBasicProfile();
          caller.profile = googleUser.getBasicProfile();
        });
    }

    signOut(caller) {
        let t = this;

        gapi.auth2.getAuthInstance().signOut().then(function() {
          t.profile = undefined;
          caller.profile = undefined;
          window.location.reload();
        });
    }

    getProfile() {
        return this.profile;
    }

    getFullName() {
        return this.profile.getName();
    }

    isAuthenticated() {
        return this.profile !== undefined && this.profile !== null;
    }
}