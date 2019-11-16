import { Input, Directive, Renderer2, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[boxShadow]'
})
export class BoxShadowDirective implements OnInit {
  @Input('boxShadow') speed: string = "0.5";
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
      `box-shadow ${this.speed}s`
    );
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.hostElement.nativeElement.style.boxShadow = this.boxShadowOnHover;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hostElement.nativeElement.style.boxShadow = this.boxShadow;
  }
}
