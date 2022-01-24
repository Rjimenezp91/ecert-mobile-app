import { Injectable } from '@angular/core';
import { SocialAuthService, GoogleLoginProvider  } from "angularx-social-login";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogged:boolean = false;

  constructor(private authService: SocialAuthService) { }

  authUser(){
    return this.isLogged = true;
  }
 logOut(){
    return this.isLogged = false;
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
  
  signOut(): void {
    this.authService.signOut();
  }
}
