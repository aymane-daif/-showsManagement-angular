import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundHomeComponent } from './modules/pages/notFound/not-found-home/not-found-home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'auth/signin' },
  { path: '**', component: NotFoundHomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
