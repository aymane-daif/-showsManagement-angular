import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowsRoutingModule } from './shows-routing.module';
import { ShowsHomeComponent } from './components/shows-home/shows-home.component';


@NgModule({
  declarations: [
    ShowsHomeComponent
  ],
  imports: [
    CommonModule,
    ShowsRoutingModule
  ]
})
export class ShowsModule { }
