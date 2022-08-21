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
}
