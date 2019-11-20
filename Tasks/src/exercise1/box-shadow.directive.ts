/*
  Tasks:
    1. Update the 'mouseenter' event listener so that it sets the
      box-shadow css property to the variable boxShadowOnHover.
    2. Update the 'mouseleave' event listener so that it resets the
      box-shadow css property to the value from the ngOnInit method.
    3. Remove the hardcoded '0.5s' on the transition property and make it like Input parameter 'speed'
*/

import { Directive, ElementRef, HostListener, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[aw-boxShadow]'
})
export class BoxShadowDirective implements OnInit {
  hostElement;
  boxShadow = '0px 3px 3px 1px rgba(0,0,0,0.57)';
  boxShadowOnHover = '0px 3px 10px 1px rgba(0,0,0,0.57)';

  constructor(private renderer: Renderer2, hostElement: ElementRef) {
    this.hostElement = hostElement
  }

  ngOnInit() {
    this.renderer.setStyle(
      this.hostElement.nativeElement,
      'display',
      'block'
    );

    this.renderer.setStyle(
      this.hostElement.nativeElement,
      'box-shadow',
      this.boxShadow
    );

    this.renderer.setStyle(
      this.hostElement.nativeElement,
      'transition',
      'box-shadow 0.5s'
    );
  }

  @HostListener('mouseenter') onMouseEnter() {
    // this..renderer.setStyle(...
  }

  @HostListener('mouseleave') onMouseLeave() {
    // this..renderer.setStyle(...
  }
}
