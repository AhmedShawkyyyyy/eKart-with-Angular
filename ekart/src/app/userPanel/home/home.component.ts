import { Component, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor() {}
  @ViewChildren('ahmed') ahmed: any;
  onClick() {
    console.log(this.ahmed.nativeElement);
  }
}
