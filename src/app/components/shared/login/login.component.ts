import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  regEx = /^[0-9]+[-|‐]{1}[0-9kK]{1}$/
  isSecret:boolean = true;
  isLogged:boolean = false;
  public loginForm: FormGroup;
  @Output() event = new EventEmitter<boolean>();

  constructor(private _snackBar: MatSnackBar, private _authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.createFormGroup();
    console.log('this.isLogged',this.isLogged);
    
  }
  get getRun(){
    return this.loginForm.get('run');
  } 
  get getPassword(){
    return this.loginForm.get('password');
  } 

  createFormGroup(){
     this.loginForm = new FormGroup({
      run: new FormControl('', [Validators.pattern(this.regEx), Validators.required, Validators.minLength(7)]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)])
    })
    return this.loginForm;
  }

  onSubmit(){
    console.log('loginForm', this.loginForm);
    
   this.validaRut(this.loginForm.get('run')?.value).then(result => {
     if (result){
        this.successSnackBar();
        this._authService.authUser();
        this.isLogged = this._authService.isLogged
        if(this.isLogged){
          this.event.emit(this.isLogged)
          this.router.navigate(['/home'])
        }
        return; 
     }

     const customButton = Swal.mixin({
      customClass: {
        confirmButton: 'mainButton',
        cancelButton: 'mat-raised-button',
      },
      buttonsStyling: false
    })
    customButton.fire({
      icon: 'error',
      title: 'RUN incorrecto',
      text: 'El RUN ingresado no existe',
    })
     
   })
  }


  validaRut(rutCompleto: string) {
    let promise = new Promise((resolve, reject) => {
      
        if (!this.regEx.test(rutCompleto)) {
            reject(new Error("You fool, that's not a valid RUT"));
            return;
        }
        var tmp = rutCompleto.split('-');
        var digv = tmp[1];
        var rut = tmp[0];
        if (digv == 'K') digv = 'k';
        resolve(this.validaDV(Number(rut)) == digv);

    });

    return promise;
};

validaDV(T: number) {
    var M = 0,
        S = 1;
    for (; T; T = Math.floor(T / 10))
        S = (S + T % 10 * (9 - M++ % 6)) % 11;
    return S ? S - 1 : 'k';
};

successSnackBar(){
  this._snackBar.open('Login exitoso')
}
}
