import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowsRoutingModule } from './shows-routing.module';
import { ShowsHomeComponent } from './components/shows-home/shows-home.component';
import { ShowFormComponent } from './components/show-form/show-form.component';


@NgModule({
  declarations: [
    ShowsHomeComponent,
    ShowFormComponent
  ],
  imports: [
    CommonModule,
    ShowsRoutingModule
  ]
})
export class ShowsModule { }
