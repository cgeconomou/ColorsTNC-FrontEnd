import { Injectable } from '@angular/core';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class PaypalService {

  payPalFormData: Order = new Order()
  constructor() { }
}
