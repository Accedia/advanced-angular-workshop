import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";

import { UsersRoutingModule } from './users-routing.module';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { UserComponent } from './components/user/user.component';

@NgModule({
  declarations: [
    UsersPageComponent,
    UserPageComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule {}