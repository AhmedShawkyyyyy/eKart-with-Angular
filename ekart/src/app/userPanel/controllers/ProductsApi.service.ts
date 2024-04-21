import { Injectable } from '@angular/core';
import { APIFunctionsService } from './apifunctions.service';
import { HttpClient } from '@angular/common/http';
import { product } from '../Model/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsApiService extends APIFunctionsService<product> {
  getproduct(id: number) {
    throw new Error('Method not implemented.');
  }
  constructor(public override Http: HttpClient) {
    super('http://localhost:3000/products', Http);
  }
}
