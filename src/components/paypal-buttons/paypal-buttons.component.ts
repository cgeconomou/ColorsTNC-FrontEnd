import { Component, Input, OnInit } from '@angular/core';
import {render} from 'creditcardpayments/creditCardPayments'


@Component({
  selector: 'app-paypal-buttons',
  templateUrl: './paypal-buttons.component.html',
  styleUrls: ['./paypal-buttons.component.css']
})
export class PaypalButtonsComponent implements OnInit {

  @Input() productValue!: number;
  testVal:number =40;

  constructor() {}

  ngOnInit(): void {
    render({
      id:"#myPaypalButtons",
      currency:"USD",
      value:this.testVal,
      onApprove:(details)=>{
        alert("transaction Successfull");
      }
    })
  }

}
