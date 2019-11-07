/*
  Tasks:
    1. Complete the tasks in post-page.component.ts
*/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import {
  HomePageComponent,
  PostsPageComponent,
  NotFoundPageComponent
} from './pages'

import {
  AppComponent,
  HeaderComponent,
  PostComponent,
} from './components'

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
    BoxShadowDirective,
    SlicePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
