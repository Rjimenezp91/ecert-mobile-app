import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogged:boolean = false;

  constructor() { }

  authUser(){
    return this.isLogged = true;
  }
 logOut(){
    return this.isLogged = false;
  }
}
