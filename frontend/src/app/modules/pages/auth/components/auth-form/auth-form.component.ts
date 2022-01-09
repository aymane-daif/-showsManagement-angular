import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css'],
})
export class AuthFormComponent implements OnInit {
  @Input() heading = '';
  @Input() question = '';
  @Input() formType = '';
  constructor() {}

  ngOnInit(): void {}

  goToPagePath() {
    if (this.formType === 'Sign up') return '/signin';
    else return '/signup';
  }
  goToPage() {
    if (this.formType === 'Sign up') return 'Sign in';
    else return 'Sign up';
  }
}
