/*
  Tasks:
    1. Complete the tasks in post.component.html
    2. Complete the tasks in slice.pipe.ts
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
import { SlicePipe } from './pipe/slice/slice.pipe'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostComponent,
    AwBorderDirective,
    SlicePipe,
  ],
  imports: [
    BrowserModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }