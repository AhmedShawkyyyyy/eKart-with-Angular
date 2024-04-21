import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { users } from '../Model/users';

@Injectable({
  providedIn: 'root',
})
export class APIFunctionsService<T> {
  apiUrl: any;
  constructor(@Inject(String) public url: string, protected Http: HttpClient) {}

  get(): Observable<T> {
    return this.Http.get<T>(
      `${this.url}?userId=${localStorage.getItem('userId')}`
    );
  }
  getById(id: any): Observable<T> {
    return this.Http.get<T>(`${this.url}/${id}`);
  }
  post(obj: any): Observable<T> {
    return this.Http.post<T>(this.url, obj);
  }
  put(id: any, obj: any): Observable<T> {
    return this.Http.put<T>(this.url + `/${id}`, obj);
  }
  delete(id: any): Observable<T> {
    return this.Http.delete<T>(this.url + `/${id}`);
  }
  update(userToUpdate: users): Observable<any> {
    const url = `${this.apiUrl}/${userToUpdate.id}`;
    return this.Http.put<any>(url, userToUpdate);
  }
}
