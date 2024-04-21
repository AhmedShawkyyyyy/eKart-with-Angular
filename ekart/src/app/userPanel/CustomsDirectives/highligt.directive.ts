import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighligt]',
})
export class HighligtDirective {
  constructor(private element: ElementRef, private renderer2: Renderer2) {}

  @HostListener('mouseenter') OnMouseEnter() {
    this.renderer2.addClass(this.element.nativeElement, 'highlighted-product');
  }
  @HostListener('mouseout') OnMouseOut() {
    this.renderer2.removeClass(
      this.element.nativeElement,
      'highlighted-product'
    );
  }
}
