import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SigninHomeComponent } from './signin/components/signin-home.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { SigninFormComponent } from './components/signin-form/signin-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SignupHomeComponent } from './signup/components/signup-home.component';
import { FormHeaderComponent } from './components/form-header/form-header.component';

@NgModule({
  declarations: [
    SigninHomeComponent,
    SignupHomeComponent,
    SignupFormComponent,
    SigninFormComponent,
    FormHeaderComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
})
export class AuthModule {}
