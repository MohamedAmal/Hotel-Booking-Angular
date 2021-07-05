import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
    selector: '[divClick]',
    host: {
        '(click)': 'onClick()'
    }
})

export class HotelDivClick {
    constructor(private ele: ElementRef, private renderer: Renderer2) { }
    onClick() {
        this.renderer.setStyle(this.ele.nativeElement, 'width', '80%');
        this.renderer.setStyle(this.ele.nativeElement, 'background-color', 'cyan');
    }
}
