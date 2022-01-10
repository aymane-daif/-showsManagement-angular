import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { UserSignIn } from '../../interfaces/userSignIn';

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
    const userData: UserSignIn = {
      username: this.signInForm.get('username')?.value,
      password: this.signInForm.get('password')?.value,
    };
    this.authService.signIn(userData).subscribe((response: any) => {
      console.log(response);
    });
  }
}
