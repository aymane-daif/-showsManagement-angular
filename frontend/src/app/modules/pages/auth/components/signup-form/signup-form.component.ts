import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { IUserSignUp } from '../../interfaces/auth';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css'],
})
export class SignupFormComponent implements OnInit {
  signUpForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
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
  constructor(private authService: AuthService, private router: Router) {}

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
    this.authService.signUp(userData).subscribe({
      next: (response: any) => {
        console.log(response.success);
        console.log(response.message);
        console.log(response);
        localStorage.setItem('totalTvShows', response.data[0].totalTvShows);
        this.router.navigate(['auth/signin']);
      },
      error: (response: any) => {
        console.log(response.status);
        console.log(response.error);
      },
    });
  }
}
