import {Component, Input} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthenticationService} from "./login.service";
import {equal} from "assert";


@Component({
  selector: 'login',
  templateUrl: './login.html',
  providers: [AuthenticationService],
})
export class LoginComponent {
  emailValid: boolean;
  passwordValid: boolean;
  loginInvalid: boolean;

  public loginForm = this.formBuilder.group({
    email: ["", Validators.required],
    password: ["", Validators.required]
  });

  constructor(public formBuilder: FormBuilder, public authService: AuthenticationService, public router: Router) {
    this.emailValid = true;
    this.passwordValid = true;
    this.loginInvalid = false;
  }

  onKeyPressed = function (event: KeyboardEvent) {
    if (event.which == 13) {        // 'p' or 'P' key to toggle pause and resume.
      this.login();
    }
  }


  login() {
    let email = this.loginForm.controls['email'].value;
    let password = this.loginForm.controls['password'].value;
    if (!this.loginForm.controls['email'].valid) {
      this.emailValid = false;
    }
    if (!this.loginForm.controls['password'].valid) {
      this.passwordValid = false;
    }
    if (this.loginForm.controls['email'].valid && this.loginForm.controls['password'].valid) {
      this.authenticate();
    }
  }

  authenticate() {
    let email = this.loginForm.controls['email'].value;
    let password = this.loginForm.controls['password'].value;
    let response: any;
    this.authService.login(email,password).finally(() => {
      if(response!=null){
        localStorage.setItem("userId", response.id);
        localStorage.setItem("userType", response.type);
        this.router.navigate(['/dashboard']);
      }else{
        this.loginInvalid = true
      }
    }).subscribe(
      (data: any) => {
        response = data;
        console.log(data);
      },
      err => {
        this.loginInvalid = true
      },
      () => console.log('done loading')
    );
  }


  isUsernameValidationMessageVisible() {
    if (!this.emailValid) {
      return true;
    }
    return !this.loginForm.controls['email'].pristine && !this.loginForm.controls['email'].valid
  }

  isPasswordValidationMessageVisible() {
    if (!this.passwordValid) {
      return true;
    }
    return !this.loginForm.controls['password'].pristine && !this.loginForm.controls['password'].valid
  }

}
