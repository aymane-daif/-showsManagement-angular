import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddShowComponent } from './components/add-show/add-show.component';
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowsRoutingModule {}
