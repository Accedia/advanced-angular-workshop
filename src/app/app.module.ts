import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { UnlessDirective } from './directives/unless/unless.directive';
import { FilterPipe } from './pipes/filter/filter.pipe';

@NgModule({
   declarations: [
      AppComponent,
      PostsComponent,
      HighlightDirective,
      UnlessDirective,
      FilterPipe
   ],
   imports: [
      BrowserModule,
      FormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
