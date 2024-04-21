import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[AppHover]',
})
export class AppHoverDirective {
  constructor(private element: ElementRef, renderer2: Renderer2) {}

  @HostBinding('style.backgroundColor') backgroundColor: string = '#28282B';
  @HostBinding('style.scale') scale: string = '1';
  @HostBinding('style.borderRadius') borderRadius: string = '0px';

  @HostListener('mouseenter') OnMouseEnter() {
    this.backgroundColor = '#1a1a1c';
    this.scale = '1.1';
    this.borderRadius = '10px';
  }
  @HostListener('mouseout') OnMouseOut() {
    this.backgroundColor = '#28282B';
    this.scale = '1';
    this.borderRadius = '0px';
  }
}
