/*
  Tasks:
    1. Complete the tasks in post.service.ts
    2. Complete the tasks in posts-page.component.ts
*/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

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
import { AwBorderDirective } from './directives/border/awBorder.directive';
import { SlicePipe } from './pipes/slice/slice.pipe'

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
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
