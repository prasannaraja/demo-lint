import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// eslint-disable-next-line import/no-unresolved
import { HomeComponent } from './home/home.component';

const routes: Routes = [{ path: 'heroes', component: HomeComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
// eslint-disable-next-line import/prefer-default-export
export class AppRoutingModule {}
