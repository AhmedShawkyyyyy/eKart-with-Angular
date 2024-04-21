import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css'],
})
export class SaleComponent {
  @ViewChild('bigImage') bigImage: ElementRef<HTMLImageElement>;

  updateImages(newBigImageSrc: string) {
    const bigImageSrc = this.bigImage.nativeElement.src;
    this.bigImage.nativeElement.src = newBigImageSrc;
  }
}
