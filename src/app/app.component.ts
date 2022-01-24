import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

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

}
