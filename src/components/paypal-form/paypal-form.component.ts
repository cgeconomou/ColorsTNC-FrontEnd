import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms'
import { ShopProductService } from '../shop-product/shop-product.service';

@Component({
  selector: 'app-paypal-form',
  templateUrl: './paypal-form.component.html',
  styleUrls: ['./paypal-form.component.css']
})
export class PaypalFormComponent implements OnInit {

  paypalForm!: FormGroup
  
  constructor(public shopService:ShopProductService) { }

  ngOnInit(): void {
    this.paypalForm = new FormGroup({
      firstName: new FormControl(null),
      lastName: new FormControl(null),
      email: new FormControl(null),
    });
  }

  SumbitCustomerOrder(){
    console.log(this.paypalForm);
  }

}
