import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupHomeComponent } from './components/signup-home/signup-home.component';

@NgModule({
  declarations: [SignupHomeComponent],
  imports: [CommonModule, SignupRoutingModule],
  exports: [SignupHomeComponent],
})
export class SignupModule {}
