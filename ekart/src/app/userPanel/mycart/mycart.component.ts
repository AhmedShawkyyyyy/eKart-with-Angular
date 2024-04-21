import { product } from 'src/app//userPanel/Model/product';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AddToCartService } from '../controllers/add-to-cart.service';
import { cart } from '../Model/cart';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.css'],
})
export class MycartComponent implements OnInit {
  products: cart[] = [];

  constructor(private api: AddToCartService, private toastr: ToastrService) {
    this.getAllCartProducts();
  }
  ngOnInit() {}
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

  proceedToCheckOut() {}
}
