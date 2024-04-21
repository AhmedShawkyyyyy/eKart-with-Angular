import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css'],
})
export class TopMenuComponent {
  topMenuItems: string[];
  logOut() {
    localStorage.removeItem('userId');
    this.router.navigate(['/home']);
  }
  constructor(private router: Router) {
    this.updateTopMenuItems();
  }

  updateTopMenuItems() {
    const userId = localStorage.getItem('userId');
    this.topMenuItems = userId
      ? ['Help', '|', 'My Cart', '|', 'CheckOut', '|', 'My Account', '|']
      : ['Help', '|', 'Sign up', '|', 'Log in'];
  }
  getRouterLink(mentItem: string): string {
    return mentItem.toLowerCase().replace(/\s+/g, '_');
  }
  @ViewChild('logOff') HtmlIElement: ElementRef;
  onClik() {
    console.log(this.HtmlIElement.nativeElement);
    this.HtmlIElement.nativeElement.click();
  }
  isUserLoggedIn() {
    const userId = localStorage.getItem('userId');
    return userId !== null;
  }
}
