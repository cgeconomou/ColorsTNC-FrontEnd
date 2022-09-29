import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private URL = 'https://localhost:44321/api/Customer';
  httpOptions = {
    headers: new HttpHeaders({'content-Type':'application/json'})
  }
  constructor(private httpService: HttpClient) { }

  GetCustomers():Observable<Customer[]>{
    return this.httpService.get<Customer[]>(this.URL,{headers:new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('userToken')})});
  }

  CreateCustomer(myCustomer:Customer):Observable<Customer>{
    return this.httpService.post<Customer>(this.URL, myCustomer, this.httpOptions);
  }

  UpdateCustomer(myCustomer:Customer){
    const url = `${this.URL}/${myCustomer.Id}`
    return this.httpService.put<Customer>(url, myCustomer, this.httpOptions);
  }


  DeleteCustomer(id:number){
    const url = `${this.URL}/${id}`;
    return this.httpService.delete<Customer>(url,this.httpOptions);
  }

}
