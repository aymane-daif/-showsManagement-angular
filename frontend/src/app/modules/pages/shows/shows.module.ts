import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowsRoutingModule } from './shows-routing.module';
import { ShowsHomeComponent } from './components/shows-home/shows-home.component';
import { ShowFormComponent } from './components/show-form/show-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ShowsHomeComponent, ShowFormComponent],
  imports: [CommonModule, ShowsRoutingModule, ReactiveFormsModule],
})
export class ShowsModule {}
