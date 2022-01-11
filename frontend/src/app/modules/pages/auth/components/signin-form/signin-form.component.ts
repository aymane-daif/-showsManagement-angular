import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../services/auth.service';
import { IUserSignIn } from '../../interfaces/auth';

@Component({
  selector: 'app-signin-form',
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.css'],
})
export class SigninFormComponent implements OnInit {
  signInForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}
  onSubmit($event: any) {
    $event.preventDefault();
    console.log();
    console.log();
    if (this.signInForm.invalid) {
      // invalid data
      console.log(this.signInForm.getError);
      return;
    }
    const userData: IUserSignIn = {
      username: this.signInForm.get('username')?.value,
      password: this.signInForm.get('password')?.value,
    };
    this.authService.signIn(userData).subscribe((response: any) => {
      let jwtToken = response?.headers.get('Authorization');
      if (jwtToken) {
        console.log(response?.headers.get('Authorization'));
        localStorage.setItem('token', jwtToken);
      }
    });
  }
}
