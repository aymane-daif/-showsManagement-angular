import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowsRoutingModule } from './shows-routing.module';
import { ShowsHomeComponent } from './components/shows-home/shows-home.component';
import { ShowFormComponent } from './components/show-form/show-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { AddShowComponent } from './components/add-show/add-show.component';
import { ShowsHeaderComponent } from './components/shows-header/shows-header.component';
import { ShowLoaderComponent } from './components/show-loader/show-loader.component';

@NgModule({
  declarations: [ShowsHomeComponent, ShowFormComponent, AddShowComponent, ShowsHeaderComponent, ShowLoaderComponent],
  imports: [
    CommonModule,
    ShowsRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class ShowsModule {}
