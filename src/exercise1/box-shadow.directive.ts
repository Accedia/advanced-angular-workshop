/*
  Tasks:
    1. Update the 'mouseenter' event listener so that it changes the
      box-shadow css property to different value from the ngOnInit method.
    2. Update the 'mouseleave' event listener so that it resets the
      box-shadow css property to the value from the ngOnInit method.
    3. Remove the hardcoded '0.5s' on the transition property and make it like Input parameter 'speed'
*/

import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[boxShadow]'
})
export class BoxShadowDirective implements OnInit {
  hostElement;
  boxShadow = '0px 3px 3px 1px rgba(0,0,0,0.57)';

  constructor(hostElement: ElementRef) {
    this.hostElement = hostElement
  }

  ngOnInit() {
    this.hostElement.nativeElement.style.display = 'block'

    this.hostElement.nativeElement.style.boxShadow = this.boxShadow;
    this.hostElement.nativeElement.style.transition = `box-shadow 0.5s`;
  }

  @HostListener('mouseenter') onMouseEnter() {
    // this.hostElement...
  }

  @HostListener('mouseleave') onMouseLeave() {
    // this.hostElement...
  }
}
