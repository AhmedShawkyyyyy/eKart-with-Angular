import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[DisabledProduct]',
})
export class DisabledProductDirective {
  constructor(private element: ElementRef, private renderer2: Renderer2) {}

  @Input() set DisabledProduct(disabled: boolean) {
    if (disabled) {
      this.renderer2.addClass(this.element.nativeElement, 'disabled-product');
    }
  }
}
