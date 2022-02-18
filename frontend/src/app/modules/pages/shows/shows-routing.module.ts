import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddShowComponent } from './components/add-show/add-show.component';
import { ShowDetailsComponent } from './components/show-details/show-details.component';
import { ShowEditComponent } from './components/show-edit/show-edit.component';
import { ShowsHomeComponent } from './components/shows-home/shows-home.component';

const routes: Routes = [
  {
    path: 'shows',
    component: ShowsHomeComponent,
  },
  {
    path: 'shows/add',
    component: AddShowComponent,
  },
  {
    path: 'shows/:showId',
    component: ShowDetailsComponent,
  },
  {
    path: 'shows/:showId/edit',
    component: ShowEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowsRoutingModule {}
