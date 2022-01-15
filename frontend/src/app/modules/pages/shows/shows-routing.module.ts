import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowFormComponent } from './components/show-form/show-form.component';
import { ShowsHomeComponent } from './components/shows-home/shows-home.component';

const routes: Routes = [
  {
    path: 'shows',
    component: ShowsHomeComponent,
  },
  {
    path: 'shows/add',
    component: ShowFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowsRoutingModule {}
