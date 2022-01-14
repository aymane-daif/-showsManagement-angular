import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthHomeComponent } from './components/auth-home/auth-home.component';
import { SigninHomeComponent } from './components/signin-home/signin-home.component';
import { SignupHomeComponent } from './components/signup-home/signup-home.component';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthHomeComponent,
    children: [
      {
        path: 'signin',
        component: SigninHomeComponent,
      },
      {
        path: 'signup',
        component: SignupHomeComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
