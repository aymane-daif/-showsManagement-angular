import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninHomeComponent } from './components/signin-home.component';

const routes: Routes = [
  {
    path: 'signin',
    component: SigninHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SigninRoutingModule { }
