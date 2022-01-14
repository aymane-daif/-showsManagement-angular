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
import { AuthHomeComponent } from './components/auth-home/auth-home.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { NotFoundHomeComponent } from '../notFound/not-found-home/not-found-home.component';

@NgModule({
  declarations: [
    SigninHomeComponent,
    SignupHomeComponent,
    SigninFormComponent,
    SignupFormComponent,
    FormHeaderComponent,
    AuthHomeComponent,
    HeaderComponent,
    NotFoundHomeComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
})
export class AuthModule {}
