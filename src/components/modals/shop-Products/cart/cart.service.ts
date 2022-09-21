import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  payPalBtnVisible: boolean = false;
  constructor() { }
}
