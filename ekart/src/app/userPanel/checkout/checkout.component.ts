import { Component, OnInit } from '@angular/core';
import { AddToCartService } from '../controllers/add-to-cart.service';
import { cart } from './../Model/cart';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent {
  products: cart[] = [];

  constructor(private api: AddToCartService, private toastr: ToastrService) {
    this.getAllCartProducts();
  }

  getAllCartProducts() {
    this.api.get().subscribe((data: any) => {
      console.log(data);
      this.products = data;
    });
  }

  getTotalReceipt() {
    let totalReceipt = 0;
    for (const product of this.products) {
      totalReceipt += product.price * product.quantity;
    }
    return totalReceipt;
  }
  removeFromCart(id: any) {
    this.api.delete(id).subscribe(() => {
      this.getAllCartProducts();
      console.log('deleted');
      this.toastr.info('Product Deleted from cart !', '', {
        timeOut: 3000,
        positionClass: 'toast-bottom-left',
        progressBar: true,
        progressAnimation: 'decreasing',
        easeTime: 200,
      });
    });
  }
}
