/*
  Tasks:
    1. Complete the tasks in app.component.html
    2. Complete the tasks in header.component.html
    3. Complete the tasks in app-routing.module.ts
*/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
  PostComponent
} from './components'

import { AwBorderDirective } from './directives/border/awBorder.directive';

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
    AwBorderDirective,
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
