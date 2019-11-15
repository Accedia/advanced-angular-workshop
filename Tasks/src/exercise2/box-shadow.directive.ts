import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[boxShadow]'
})
export class BoxShadowDirective implements OnInit {
  hostElement;
  boxShadow = '0px 3px 3px 1px rgba(0,0,0,0.57)';
  boxShadowOnHover = '0px 3px 10px 1px rgba(0,0,0,0.57)';

  constructor(hostElement: ElementRef) {
    this.hostElement = hostElement
  }

  ngOnInit() {
    this.hostElement.nativeElement.style.display = 'block'

    this.hostElement.nativeElement.style.boxShadow = this.boxShadow;
    this.hostElement.nativeElement.style.transition = `box-shadow 0.5s`;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.hostElement.nativeElement.style.boxShadow = this.boxShadowOnHover;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hostElement.nativeElement.style.boxShadow = this.boxShadow;
  }
}
