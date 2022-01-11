import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormHeaderComponent } from './components/form-header/form-header.component';
import { SigninHomeComponent } from './components/signin-home/signin-home.component';
import { SignupHomeComponent } from './components/signup-home/signup-home.component';
import { SigninFormComponent } from './components/signin-form/signin-form.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';

@NgModule({
  declarations: [
    SigninHomeComponent,
    SignupHomeComponent,
    SigninFormComponent,
    SignupFormComponent,
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
