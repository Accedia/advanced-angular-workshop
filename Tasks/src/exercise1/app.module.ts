/*
  Tasks:
    1. Complete the tasks in app.component.html
    2. Complete the tasks in awBorder.directive.ts
*/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  AppComponent,
  HeaderComponent,
  PostComponent,
} from './components';

import { PostService } from './services/post.service';
import { AwBorderDirective } from './directives/border/awBorder.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostComponent,
    AwBorderDirective,
  ],
  imports: [
    BrowserModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
