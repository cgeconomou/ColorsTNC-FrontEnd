import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../models/order';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private URL = "https://localhost:44321/api/Order";
  httpOptions = {
    headers: new HttpHeaders({'content-Type':'application/json'})
  }
  constructor(private httpService:HttpClient) { }


  GetOrders():Observable<Order[]>{
    return this.httpService.get<Order[]>(this.URL, this.httpOptions);
  }

  CreateOrder(order: Order):Observable<Order>{
    console.log("APO TO CREATE ORDER SERVICE");
    return this.httpService.post<Order>(this.URL, order, this.httpOptions);
  }
}
