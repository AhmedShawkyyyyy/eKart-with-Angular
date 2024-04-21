import { Input } from '@angular/core';
import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[setBackgound]',
})
export class setBackgound implements OnInit {
  // when i make the element >> privete , in the constructor so >> no need to make the below line
  // and no need to create the line in constructor

  //private element: ElementRef;

  @Input() backColor: string = '#36454f';
  @Input() textColor: string = '#ffffff';

  // i used Renderer2 to make it work i all applications and search engines
  constructor(private element: ElementRef, private renderer: Renderer2) {
    //this.element = element;
  }
  ngOnInit() {
    this.renderer.setStyle(
      this.element.nativeElement,
      'background',
      this.backColor
    );
    this.renderer.setStyle(this.element.nativeElement, 'color', this.textColor);
    this.renderer.setAttribute(
      this.element.nativeElement,
      'title',
      'this is example for training'
    );

    // this.element.nativeElement.style.backgroundColor = '#36454f';
    // this.element.nativeElement.style.color = '#ffffff';
  }
}
