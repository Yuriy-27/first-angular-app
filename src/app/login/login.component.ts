import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  // firstName: FormControl;
  // lastName: FormControl;
  // email: FormControl;
  // password: FormControl;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    // this.createFormControls();
    // this.createForm();
  }

  private createForm() {
    this.loginForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,4}')]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  getFirstNameErrors() {
    return this.loginForm.controls.firstName.hasError('minlength') ? 'Enter more than 1 characters' :
      this.loginForm.controls.firstName.hasError('required') ? 'You must enter a value' :
        '';
  }

  getLastNameErrors() {
    return this.loginForm.controls.lastName.hasError('minlength') ? 'Enter more than 1 characters' :
      this.loginForm.controls.lastName.hasError('required') ? 'You must enter a value' :
        '';
  }

  getEmailErrors() {
    return this.loginForm.controls.email.hasError('pattern') ? 'Not a valid email' :
      this.loginForm.controls.email.hasError('required') ? 'You must enter a value' :
        '';
  }

  getPasswordErrors() {
    return this.loginForm.controls.password.hasError('minlength') ? 'Enter more than 3 characters' :
      this.loginForm.controls.password.hasError('required') ? 'You must enter a value' :
        '';
  }

  login() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
    }
  }
}
