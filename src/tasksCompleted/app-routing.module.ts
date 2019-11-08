/*
  Tasks:
    1. Modify the routes array to include the NotFoundPageComponent
*/

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  HomePageComponent,
  NotFoundPageComponent,
  PostsPageComponent,
} from './pages'

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomePageComponent },
  { path: 'posts', component: PostsPageComponent },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
