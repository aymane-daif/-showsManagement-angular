import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowsHomeComponent } from './components/shows-home/shows-home.component';

const routes: Routes = [
  {
    path: 'shows',
    component: ShowsHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowsRoutingModule {}
