import { product } from 'src/app//userPanel/Model/product';
import { Injectable } from '@angular/core';
import { APIFunctionsService } from './apifunctions.service';
import { HttpClient } from '@angular/common/http';
import { cart } from '../Model/cart';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AddToCartService extends APIFunctionsService<cart> {
  constructor(public override Http: HttpClient) {
    super('  http://localhost:3000/cart', Http);
  }
}
