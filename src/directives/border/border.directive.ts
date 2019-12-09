import { Input, Directive, Renderer2, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[awBorder]'
})
export class AwBorderDirective implements OnInit {
  @Input('awBorder') color: string = "#3257a8";
  
  display = 'block';
  border = '3px solid';

  constructor(private renderer: Renderer2, private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'display',
      this.display
    );

    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'border',
      `${this.border} ${this.color}`
    );
  }
}
