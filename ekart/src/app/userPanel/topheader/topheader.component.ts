import {
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'app-topheader',
  templateUrl: './topheader.component.html',
  styleUrls: ['./topheader.component.css'],
})
export class TopheaderComponent {
  // constructor(private element: ElementRef, private renderer2: Renderer2) {}
  // @HostBinding('style.display')
  // display: string = 'block';
  // @HostListener('mouseclick') onmouseclick() {
  //   this.display = 'none';
  // }
  // closeTopHeader() {
  //   this.display = 'none';
  // }
}
