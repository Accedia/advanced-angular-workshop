/*
  Tasks:
    1. Add a 404 page for when the user tries to access an invalid url. 
*/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import {
  HomePageComponent,
  PostsPageComponent
} from './pages'

import {
  AppComponent,
  HeaderComponent,
} from './components'

@NgModule({
  declarations: [
    AppComponent,

    HomePageComponent,
    PostsPageComponent,

    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
