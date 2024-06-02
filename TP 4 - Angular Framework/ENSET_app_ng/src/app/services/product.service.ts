import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../model/product.model";
import {ProductComponent} from "../product/product.component";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http :HttpClient) { }
 private host:string ="http://localhost:8090";
  public getProducts(keyword:string='',page:number=1,size:number=3){
    return this.http.get(`${this.host}/products?name_like=${keyword}&_page=${page}&_limit=${size}`,{observe:'response'});
  }

  public checkProduct(prod:Product){
    return this.http.patch<Product>(`${this.host}/products/${prod.id}`,{checked:!prod.checked});
  }

  public deleteProduct(prod:Product){
    console.log("test delete")
    return this.http.delete(`${this.host}/products/${prod.id}`)
  }
  public saveProduct(prod:Product){
    return this.http.post(`${this.host}/products`,prod);
  }

  /*public searchProduct(keyword:string,currentPage:number,sizePage:number):Observable<Array<Product>>{
    console.log(keyword);
    return this.http.get<Array<Product>>(`http://localhost:8090/products?name_like=${keyword}`);
  }*/
  public getProductsById(productId:number) {
    return this.http.get<Product>(`${this.host}/products/${productId}`);
  }

  updateProducts(product:Product) {
    return this.http.put<Product>(`${this.host}/products/${product.id}`,product);
  }
}
