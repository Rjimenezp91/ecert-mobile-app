import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ecert-mobile-app';
  userAuth:boolean = false;
  opened:boolean= false;
  nombre: string = 'rodrigo';

  constructor(private _auth: AuthService, private router: Router){
    
  }

  ngOnInit(){}
  setUserAuth($event){
    this.userAuth = $event;
    
  }
  logOut(){
    this.userAuth =  this._auth.logOut();
   this.router.navigate(['/login'])
    
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
