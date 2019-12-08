import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { PostsPageComponent } from './pages/posts-page/posts-page.component';
import { PostPageComponent } from './pages/post-page/post-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { UserComponent } from './components/user/user.component';
import { PostComponent } from './components/post/post.component';

@NgModule({
   declarations: [
      AppComponent,
      HomePageComponent,
      UsersPageComponent,
      UserPageComponent,
      UserComponent,
      PostsPageComponent,
      PostPageComponent,
      PostComponent,
      NotFoundPageComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
