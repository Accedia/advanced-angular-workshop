/*
  Tasks:
    1. Add Renderer2 and ElementRef in the constructor and use it in the ngOnInit
      to set the "display" and "border" styles
    2. Update the hardcoded color value of the border and make it like
      Input parameter, so it can be customizable.
      Leave the current color value like a default if no other is passed.
*/

import { Directive, OnInit } from '@angular/core';

@Directive({
  selector: '[awBorder]'
})
export class AwBorderDirective implements OnInit {
  // TODO 3 - add Input parameter "color"
  display = 'block';
  border = '3px solid #3257a8';

  constructor(/** TODO 1 - add Renderer2 and ElementRef*/) { }

  ngOnInit() {
    // TODO 2 - set display and border styles
  }
}
