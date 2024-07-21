import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { ProductInterface } from '../interface/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  // get all products
  products():Observable<any>{
    return this.httpClient.get<any>(`${environment.api}/products`);
  }

  // get product by id
  productById(id: number): Observable<any>{
    return this.httpClient.get<any>(`${environment.api}/products/${id}`);
  }

  // search products
  searchProducts(q: string): Observable<any>{
    return this.httpClient.get<any>(`${environment.api}/products/search?q=${q}`);
  }

  // sort products

  // limit products

  // product categories
  productCategories(): Observable<any>{
    return this.httpClient.get<any>(`${environment.api}/products/categories`);
  }

  // products by category
  productsByCategory(category: string): Observable<any>{
    return this.httpClient.get<any>(`${environment.api}/products/category/${category}`);
  }

}
