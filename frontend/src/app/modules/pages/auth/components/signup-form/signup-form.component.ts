import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { IUserSignUp } from '../../interfaces/auth';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css'],
})
export class SignupFormComponent implements OnInit {
  signUpForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    repeatedPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    terms: new FormControl(false, [Validators.requiredTrue]),
  });
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}
  onSubmit($event: any) {
    $event.preventDefault();
    if (this.signUpForm.invalid) {
      // invalid data
      console.log(this.signUpForm.getError);
      return;
    }
    const userData: IUserSignUp = {
      username: this.signUpForm.get('username')?.value,
      email: this.signUpForm.get('email')?.value,
      password: this.signUpForm.get('password')?.value,
    };
    this.authService.signUp(userData).subscribe((response: any) => {
      console.log(response?.success);
      console.log(response?.message);
    });
  }
}
