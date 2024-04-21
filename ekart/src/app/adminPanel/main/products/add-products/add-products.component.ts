import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { product } from 'src/app/userPanel/Model/product';
import { ProductsApiService } from 'src/app/userPanel/controllers/ProductsApi.service';
@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css'],
})
export class AddProductsComponent {
  constructor(
    private api: ProductsApiService,
    private router: Router,
    private toastr: ToastrService
  ) {
    let loggedIn = JSON.parse(localStorage.getItem('loggedIn') || 'false');
    if (!loggedIn) {
      this.router.navigateByUrl('/error');
    }
  }
  product = new product();

  message: string = '';
  submit() {
    this.api.post(this.product).subscribe((data: any) => {
      this.product = data;
      console.log(data);
      this.toastr.success('product added !', 'Nice Job !'),
        {
          timeout: 2000,
          positionClass: 'toast-top-left',
          easeTime: 200,
          preventDuplicates: true,
        };
      this.message = ' Prodduct added successfully ! 😍💖';
      this.product = new product();
      setTimeout(() => {
        this.message = '';
      }, 2000);
    });
  }
  onAvailabilityChange(available: boolean) {
    this.product.is_in_inventory = available;
    console.log(this.product.is_in_inventory);
  }

  reviewCount(starValue: number) {
    this.product.review = starValue;
    console.log(this.product.review);
  }
}
