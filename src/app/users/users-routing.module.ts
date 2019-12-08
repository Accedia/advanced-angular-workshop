import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";

import { UsersPageComponent } from './pages/users-page/users-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';

const routes: Routes = [
  {
    path: '', 
    component: UsersPageComponent, 
    children: [
      { path: ':id/:name', component: UserPageComponent },
  ]},
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {}