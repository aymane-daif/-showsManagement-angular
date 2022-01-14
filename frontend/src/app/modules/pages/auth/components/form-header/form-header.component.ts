import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-header',
  templateUrl: './form-header.component.html',
  styleUrls: ['./form-header.component.css'],
})
export class FormHeaderComponent implements OnInit {
  @Input() formTitle = '';
  @Input() formQuestion = '';
  @Input() formType = '';

  constructor() {}

  ngOnInit(): void {}
  goToPath() {
    return this.formType === 'Sign up' ? '/auth/signin' : '/auth/signup';
  }
  goToPage(): String {
    return this.formType === 'Sign up' ? 'Sign in' : 'Sign up';
  }
}
