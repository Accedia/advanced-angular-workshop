import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";

import { UsersComponent } from './users.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: 'users', 
    component: UsersComponent, 
    children: [
      { path: ':id/:name', component: UserComponent },
  ]},
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {}