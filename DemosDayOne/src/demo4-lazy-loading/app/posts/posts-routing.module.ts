import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../auth-guard.service';
import { PostsComponent } from './posts.component';
import { PostComponent } from './post/post.component';
import { EditPostComponent } from './edit-post/edit-post.component';

const routes: Routes = [
  {
    path: '', 
    canActivate:[AuthGuard], 
    component: PostsComponent, 
    children: [
      {path: ':id', component: PostComponent},
      {path: ':id/edit', component: EditPostComponent}
    ]
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PostsRoutingModule {}