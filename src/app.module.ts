import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  AppComponent,
  HeaderComponent,
  PostComponent,
} from './components';

import { AwBorderDirective } from './directives/border/border.directive';
import { SlicePipe } from './pipes/slice/slice.pipe'

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
