import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { product } from 'src/app/userPanel/Model/product';
import { ProductsApiService } from 'src/app/userPanel/controllers/ProductsApi.service';

@Component({
  selector: 'app-edit-product',

  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
})
export class EditProductComponent {
  product = new product();
  message: string = '';
  id!: any;

  constructor(
    private api: ProductsApiService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) {
    let loggedIn = JSON.parse(localStorage.getItem('loggedIn') || 'false');
    if (!loggedIn) {
      this.router.navigateByUrl('/error');
    }
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.api.getById(this.id).subscribe((data: any) => {
      this.product = data;
    });

    console.log(this.id);
  }

  update() {
    this.api.put(this.id, this.product).subscribe((data: any) => {
      console.log(`the product : ${this.id} updated`);
      this.toastr.success('product Modified'),
        {
          titleClass: 'toast-title',
          messageClass: 'toast-message',
          timeout: 1500,
          positionClass: 'toast-top-center',
          easeTime: 300,
          preventDuplicates: true,
        };
      this.message = 'Product Added Successfully 👍';
      setTimeout(() => {
        this.router.navigateByUrl('/list-of-products');
      }, 3000);
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
