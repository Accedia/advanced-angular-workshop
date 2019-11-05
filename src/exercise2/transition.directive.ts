import { Directive, ElementRef, HostListener, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appTransition]'
})
export class TransitionDirective implements OnInit {
  hostElement;

  @Input('appTransition') speed: string;

  constructor(hostElement: ElementRef) { 
    this.hostElement = hostElement
  }

  ngOnInit() {
    this.hostElement.nativeElement.style.display = 'block';
    this.hostElement.nativeElement.style.margin = 'auto';
    this.hostElement.nativeElement.style.width = '50%';
    this.hostElement.nativeElement.style.transition = `width ${this.speed}s`;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.hostElement.nativeElement.style.width = '80%';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hostElement.nativeElement.style.width = '50%';
  }
}
