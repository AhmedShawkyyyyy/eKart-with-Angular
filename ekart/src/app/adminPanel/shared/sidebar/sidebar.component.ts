import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersApiService } from 'src/app/userPanel/controllers/users-api.service';

@Component({
  selector: 'admin-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  user: any;
  constructor(private api: UsersApiService, private router: Router) {}

  getAllUsersData() {
    this.api.get().subscribe((data: any) => {
      this.user = data;
      console.log(this.user);
    });
  }
  naviagteToAddProductsPage() {
    this.router.navigateByUrl('add_products');
  }
  navigateToDashboard() {
    this.router.navigateByUrl('/dashboard');
  }
  navigateToListofProducts() {
    this.router.navigateByUrl('/list-of-products');
  }
  navigateToEditProducts() {
    this.router.navigateByUrl('/edit_products/:id');
  }
  logout() {
    const userId = localStorage.getItem('userId');
    if (userId) {
      localStorage.removeItem('userId');
      localStorage.removeItem('loggedIn');
      this.router.navigateByUrl('/log_in');
    }
  }
}
