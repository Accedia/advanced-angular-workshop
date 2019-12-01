import { Directive, ElementRef, OnInit, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[awHighlight]'
})
export class HighlightDirective implements OnInit {
  @Input('awHighlight') highlightColor: string;
  
  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // this.elementRef.nativeElement.style.backgroundColor = this.highlightColor;
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', this.highlightColor)
  }
}
