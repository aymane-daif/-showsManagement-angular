import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin-form',
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.css'],
})
export class SigninFormComponent implements OnInit {
  signInForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('', [Validators.minLength(6)]),
  });
  constructor() {}

  ngOnInit(): void {}
  onSubmit($event: any) {
    $event.preventDefault();
    console.log(this.signInForm.get('username')?.value);
    console.log(this.signInForm.get('password')?.value);
  }
}
