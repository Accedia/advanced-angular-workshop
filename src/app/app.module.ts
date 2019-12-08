import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { NotFoundModule } from './not-found/not-found.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home/pages/home-page/home-page.component';

@NgModule({
   declarations: [
      AppComponent,
      HomePageComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      NotFoundModule,
      UsersModule,
      PostsModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
