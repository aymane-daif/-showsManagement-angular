import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupHomeComponent } from './components/signup-home/signup-home.component';

const routes: Routes = [
  {
    path: 'signup',
    component: SignupHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignupRoutingModule {}
