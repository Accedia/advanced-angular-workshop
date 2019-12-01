import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  HomePageComponent,
  NotFoundPageComponent,
  PostsPageComponent,
  PostPageComponent,
} from './pages'

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'posts', component: PostsPageComponent,
    children: [
      { path: ':id', component: PostPageComponent }
    ] 
  },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
