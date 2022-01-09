import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SigninRoutingModule } from './signin-routing.module';
import { SigninHomeComponent } from './components/signin-home.component';

@NgModule({
  declarations: [SigninHomeComponent],
  imports: [CommonModule, SigninRoutingModule],
  exports: [SigninHomeComponent],
})
export class SigninModule {}
