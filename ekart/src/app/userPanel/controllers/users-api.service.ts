import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIFunctionsService } from './apifunctions.service';
import { users } from '../Model/users';

@Injectable({
  providedIn: 'root',
})
export class UsersApiService extends APIFunctionsService<users> {
  constructor(public override Http: HttpClient) {
    super('http://localhost:3000/users', Http);
  }
}
