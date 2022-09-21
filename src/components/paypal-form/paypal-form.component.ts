import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms'
import { CartService } from '../modals/shop-Products/cart/cart.service';
import { Order } from '../models/order';
import { OrderComponent } from '../order/order.component';
import { ShopProductService } from '../shop-product/shop-product.service';
import { PaypalService } from './paypal.service';

@Component({
  selector: 'app-paypal-form',
  templateUrl: './paypal-form.component.html',
  styleUrls: ['./paypal-form.component.css']
})
export class PaypalFormComponent implements OnInit {

  
  
  constructor(public shopService:ShopProductService, private cartService: CartService, private paypalService: PaypalService) { }

  ngOnInit(): void {
    
    
  }

  OnSumbitForm(fName:string, lName:string, email:string, address:string){
    
    this.paypalService.payPalFormData.FirstName = fName;
    this.paypalService.payPalFormData.LastName = lName;
    this.paypalService.payPalFormData.Email = email;
    this.paypalService.payPalFormData.Address = address;
    this.paypalService.payPalFormData.TotalCost = this.shopService.totalCartCost;
    console.log(this.paypalService.payPalFormData);
    this.cartService.payPalBtnVisible = true;
  }

 

}
