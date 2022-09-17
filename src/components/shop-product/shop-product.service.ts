import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ShopProduct } from '../models/shopProduct';

@Injectable({
  providedIn: 'root'
})
export class ShopProductService {

  
  private URL = "https://localhost:44321/api/ShopProduct";
  httpOptions = {
    headers: new HttpHeaders({'content-Type': 'application/json'})
  }

  constructor(private httpService:HttpClient) { }

  GetShopProducts():Observable<ShopProduct[]>{
    return this.httpService.get<ShopProduct[]>(this.URL);
  }

}
