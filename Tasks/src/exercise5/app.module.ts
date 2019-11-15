/*
  Tasks:
    1. Complete the tasks in post.service.ts
    2. Complete the tasks in posts-page.component.ts
*/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import {
  HomePageComponent,
  PostsPageComponent,
  NotFoundPageComponent,
  PostPageComponent,
} from './pages'

import {
  AppComponent,
  HeaderComponent,
  PostComponent,
} from './components'

import { PostService } from './services/post.service'

import { BoxShadowDirective } from './box-shadow.directive';

import { SlicePipe } from './slice.pipe'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostComponent,
    HomePageComponent,
    PostsPageComponent,
    NotFoundPageComponent,
    PostPageComponent,
    BoxShadowDirective,
    SlicePipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
