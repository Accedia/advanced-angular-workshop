/*
  Tasks:
    1. Add the post component to the app.component.html
*/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  AppComponent,
  HeaderComponent,
  PostComponent,
} from './components'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
