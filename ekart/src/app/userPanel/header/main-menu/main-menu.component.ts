import { Component } from '@angular/core';

@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css'],
})
export class MainMenuComponent {
  mainMenuItem: string[] = [
    `Home`,
    `Product`,
    `Sale`,
    `New Arrival`,
    `Our Story`,
    `Contact Us`,
  ];
  getRouterLink(menuItem: string): string {
    return menuItem.toLowerCase().replace(/\s+/g, '_');
  }
}
