import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ecert-mobile-app';
  userAuth:boolean = true;
  opened:boolean= false;

  constructor(private _auth: AuthService){
    
  }

  ngOnInit(){
    console.log('userAuth', this.userAuth);
    
  }
  setUserAuth($event){
    this.userAuth = $event;
    
  }
  logOut(){
    this._auth.isLogged = false;
    this.userAuth = this._auth.isLogged;
    
  }

  swatLogOut(){
    const customButton = Swal.mixin({
      customClass: {
        confirmButton: 'mat-raised-button',
        cancelButton: 'mat-raised-button',
      },
      buttonsStyling: false
    })
    customButton.fire({
      icon: 'info',
      title: 'Saliendo',
      text: '¿Estás seguro de que deseas salir?',
      showCancelButton: true,
      cancelButtonText: 'cancel'
    })
     
  }

}
