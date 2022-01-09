import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninHomeComponent } from './signin/components/signin-home.component';
import { SignupHomeComponent } from './signup/components/signup-home/signup-home.component';

const routes: Routes = [
  { path: 'signup', component: SignupHomeComponent },
  { path: 'signin', component: SigninHomeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
