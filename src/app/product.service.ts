import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {}

  getProducts(page: number, size: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}?page=${page}&size=${size}`);
  }
}
