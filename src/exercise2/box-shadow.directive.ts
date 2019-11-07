import { Directive, ElementRef, HostListener, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[boxShadow]'
})
export class BoxShadowDirective implements OnInit {
  hostElement;

  @Input('boxShadow') speed: string = "0.5";

  constructor(hostElement: ElementRef) {
    this.hostElement = hostElement
  }

  ngOnInit() {
    this.hostElement.nativeElement.style.display = 'block'

    this.hostElement.nativeElement.style.boxShadow = '0px 3px 3px 1px rgba(0,0,0,0.57)'
    this.hostElement.nativeElement.style.transition = `box-shadow ${this.speed}s`;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.hostElement.nativeElement.style.boxShadow = '0px 3px 10px 1px rgba(0,0,0,0.57)'
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hostElement.nativeElement.style.boxShadow = '0px 3px 3px 1px rgba(0,0,0,0.57)'
  }
}
