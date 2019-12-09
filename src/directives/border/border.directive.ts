import {
    Directive,
    ElementRef,
    Input,
    OnInit,
    Renderer2
    } from '@angular/core';

@Directive({
  selector: '[awBorder]'
})
export class AwBorderDirective implements OnInit {
        
    @Input('awBorder') color: string = "#3257a8";
    display: string = 'block';
    border: string = '3px solid';

    constructor(
        private renderer: Renderer2, 
        private elementRef: ElementRef
    ) { }

    ngOnInit() {
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
