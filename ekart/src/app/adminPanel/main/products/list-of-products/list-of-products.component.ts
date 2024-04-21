import { product } from 'src/app/userPanel/Model/product';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { ProductsApiService } from 'src/app/userPanel/controllers/ProductsApi.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-of-products',
  templateUrl: './list-of-products.component.html',
  styleUrls: ['./list-of-products.component.css'],
})
export class ListOfProductsComponent {
  products!: any[];
  selectedProductId: number | null = null;

  constructor(
    private api: ProductsApiService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.getAllProducts();
  }

  getAllProducts() {
    this.api.get().subscribe((data: any) => {
      this.products = data;
    });
  }

  // removeProduct(id: any) {
  //   this.api.delete(id).subscribe(() => {
  //     this.getAllProducts();
  //   });
  // }

  removeProduct(id: any) {
    if (id) {
      this.selectedProductId = id;
      this.openMessage();
    }
  }
  confirmRemove() {
    if (this.selectedProductId) {
      this.api.delete(this.selectedProductId).subscribe((data) => {
        this.toastr.success('Product Deleted Successfully !'),
          {
            timeout: 2000,
            positionClass: 'toast-top-left',
            easeTime: 200,
            preventDuplicates: true,
          };
        this.getAllProducts();
        this.closeMessage();
      });
    }
  }

  showMessage: boolean = false;

  openMessage() {
    this.showMessage = true;
  }
  closeMessage() {
    this.showMessage = false;
  }
  closeOverlay() {
    this.showMessage = false;
  }
}
