import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
    MatButtonModule,
    MatChipsModule,
    MatInputModule,
    MatListModule
    } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AddPostPanelComponent } from './components/add-post-panel/add-post-panel.component';
import { HeaderComponent } from './components/header/header.component';
import { PostsListComponent } from './components/posts-list/posts-list.component';

@NgModule({
   declarations: [
      AppComponent,
      AddPostPanelComponent,
      PostsListComponent,
      HeaderComponent
   ],
   imports: [
      BrowserModule,
      MatInputModule,
      MatToolbarModule,
      MatFormFieldModule,
      MatButtonModule,
      MatListModule,
      MatChipsModule,
      BrowserAnimationsModule,
      FormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
