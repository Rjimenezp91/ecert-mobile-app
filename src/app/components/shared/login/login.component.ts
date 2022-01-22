import { Component, ElementRef, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  regEx = /^[0-9]+[-|‐]{1}[0-9kK]{1}$/
  isSecret:boolean = true;
  public loginForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.createFormGroup();
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
        console.log('pasamos')
        return
     }
     console.log('no pasa nada oiga');
     
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
}
