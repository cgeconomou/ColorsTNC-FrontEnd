import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WarehouseProduct } from '../models/warehouseProduct';

@Injectable({
  providedIn: 'root'
})
export class WarehouseProductService {

  private URL = "https://localhost:44321/api/WarehouseProduct";
  httpOptions = {
    headers: new HttpHeaders({'content-Type':'application/json'})
  }
  
  constructor(private httpService:HttpClient) { }

  GetWarehouseProducts():Observable<WarehouseProduct[]>{
    return this.httpService.get<WarehouseProduct[]>(this.URL);
  }
  GetWarehouseProduct(id:number):Observable<WarehouseProduct>{
    const url = `${this.URL}/${id}`;
    return this.httpService.get<WarehouseProduct>(url, this.httpOptions);
  }

  CreateWarehouseProduct(myWarehouseProduct:WarehouseProduct):Observable<WarehouseProduct>{
    return this.httpService.post<WarehouseProduct>(this.URL,myWarehouseProduct,this.httpOptions)
  }

  UpdateWarehouseProduct(myWarehouseProduct:WarehouseProduct){
    const url = `${this.URL}/${myWarehouseProduct.Id}`;
    return this.httpService.put<WarehouseProduct>(url, myWarehouseProduct, this.httpOptions);
  }

  DeleteWarehouseProduct(id:number){
    const url = `${this.URL}/${id}`;
    return this.httpService.delete<WarehouseProduct>(url,this.httpOptions);
  }
}
