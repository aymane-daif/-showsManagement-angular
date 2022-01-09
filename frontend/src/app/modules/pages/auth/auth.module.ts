import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { InputFieldComponent } from 'src/app/components/input-field/input-field.component';
import { SigninHomeComponent } from './signin/components/signin-home.component';
import { SignupHomeComponent } from './signup/components/signup-home/signup-home.component';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { SigninFormComponent } from './components/signin-form/signin-form.component';

@NgModule({
  declarations: [
    SigninHomeComponent,
    SignupHomeComponent,
    InputFieldComponent,
    AuthFormComponent,
    SignupFormComponent,
    SigninFormComponent,
  ],
  imports: [CommonModule, AuthRoutingModule],
})
export class AuthModule {}
