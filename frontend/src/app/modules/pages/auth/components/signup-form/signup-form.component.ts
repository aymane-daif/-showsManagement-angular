import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css'],
})
export class SignupFormComponent implements OnInit {
  signUpForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    repeatedPassword: new FormControl(''),
    terms: new FormControl(false),
  });
  constructor() {}

  ngOnInit(): void {}
  onSubmit($event: any) {
    $event.preventDefault();
    console.log(this.signUpForm.get('username')?.value);
    console.log(this.signUpForm.get('email')?.value);
    console.log(this.signUpForm.get('password')?.value);
    console.log(this.signUpForm.get('repeatedPassword')?.value);
    console.log(this.signUpForm.get('terms')?.value);
  }
}
