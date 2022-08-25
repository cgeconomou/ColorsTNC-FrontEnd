import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

 
  private URL = "https://localhost:44321/api/Product";
  httpOptions = {
    headers: new HttpHeaders({'content-Type':'application/json'})
  }
  
  constructor(private httpService:HttpClient) { }

  GetProducts():Observable<Product[]>{
    return this.httpService.get<Product[]>(this.URL);
  }

  CreateProduct(myProduct:Product):Observable<Product>{
    return this.httpService.post<Product>(this.URL,myProduct,this.httpOptions)
  }

  UpdateProduct(myProduct:Product){
    const url = `${this.URL}/${myProduct.ID}`;
    return this.httpService.put<Product>(url, myProduct, this.httpOptions);
  }

  DeleteProduct(id:number){
    const url = `${this.URL}/${id}`;
    return this.httpService.delete<Product>(url,this.httpOptions);
  }
}
