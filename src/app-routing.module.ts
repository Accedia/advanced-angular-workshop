import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  HomePageComponent,
  NotFoundPageComponent,
  PostsPageComponent,
  PostPageComponent,
} from './pages'

/* 
  Note:
  We use an array of routes to determine which component gets used when a specific path is hit.
  As you can see, we currently only have 'home' & 'posts' paths. If we try to load a url
  that is not specified in this array we get a blank page. To improve UX, websites 
  often have a 404 page for cases like this. Try to add that page to the routes array.
*/

const routes: Routes = [
  // TODO 3.1
  // { path: '**', component: ... },
  { path: '', component: HomePageComponent },
  { path: 'posts', component: PostsPageComponent, /* TODO 3.2 */},  
];

/* 
  Hint:
  You may have noticed that if you added the 404 page as the first element in the array,
  the routing stopped working and every url showed the 404 page. This is because we've 
  told Angular to use a '**' (wildcard) for comparison (aka, match everything) and since
  Angular shows the component for the first matching path - we always get the 404 page.
  Try moving the wildcard entry to the last position in the array.
*/

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
