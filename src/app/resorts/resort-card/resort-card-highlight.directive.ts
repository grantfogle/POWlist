import {Directive, ElementRef, Renderer2, OnInit, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
    selector: '[appResortCardHighlight]'
})

export class ResortCardHighlightDirective implements OnInit {
    @Input() defaultColor: string = 'transparent';
    @Input() highlightColor: string = 'dodgerblue';
    @HostBinding('style.backgroundColor') backgroundColor: string;

    constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

    ngOnInit() {
        this.backgroundColor = this.defaultColor;
        // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'dodgerblue');
    }

    @HostListener('mouseenter') mouseover(eventData: Event) {
        // this.renderer.setStyle(this.elementRef.nativeElement, 'opacity', '.5');
        this.backgroundColor = this.highlightColor;
    }
    @HostListener('mouseleave') mouseleave(eventData: Event) {
        // this.renderer.setStyle(this.elementRef.nativeElement, 'opacity', '1.0');
        this.backgroundColor = this.defaultColor;
    }
}