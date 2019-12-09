import { Directive, OnInit } from '@angular/core';

@Directive({
  selector: '[awBorder]'
})
export class AwBorderDirective implements OnInit {
  // TODO 2.2 - add Input parameter "color"
  display = 'block';
  borderSize = '3px';
  borderStyle = 'solid'
  borderColor = '#3257a8'

  constructor(/** TODO 2.1 - add Renderer2 and ElementRef*/) { }

  ngOnInit(): void {
    const border = `${this.borderSize} ${this.borderStyle} ${this.borderColor}`;
    // TODO 2.1 - set display and border styles
  }
}
