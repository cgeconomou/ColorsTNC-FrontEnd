import { Component, Input, OnInit,} from '@angular/core';
import {render} from 'creditcardpayments/creditCardPayments'
import { Order } from '../models/order';
import { ShopProduct } from '../models/shopProduct';
import { OrderService } from '../order/order.service';
import { PaypalFormComponent } from '../paypal-form/paypal-form.component';
import { PaypalService } from '../paypal-form/paypal.service';
import { ShopProductComponent } from '../shop-product/shop-product.component';
import { ShopProductService } from '../shop-product/shop-product.service';


@Component({
  selector: 'app-paypal-buttons',
  templateUrl: './paypal-buttons.component.html',
  styleUrls: ['./paypal-buttons.component.css']
})
export class PaypalButtonsComponent implements OnInit {

  
  @Input() cartProducts!: Array<Array<ShopProduct>>;
  flattenCartProducts: ShopProduct[] = [];
  orderFormData!: Order;

  constructor(private shopService: ShopProductService, private cart: ShopProductComponent, private orderService: OrderService, private paypalForm: PaypalFormComponent, private paypalService: PaypalService) {}

  ngOnInit(): void {
    render({
      id:"#myPaypalButtons",
      currency:"USD",
      value:this.shopService.totalCartCost,
      onApprove:(details)=>{
        this.cart.cartProducts = [];
        this.shopService.totalCartCost = 0;
        this.CreateOrderHandler();
        console.log("APO THN APPROVE" + this.orderFormData);
        this.ConvertCartArray();
        this.shopService.PutShopProducts(this.flattenCartProducts);
        this.shopService.cartProductCount = 0;
        this.shopService.showCartModal = false;
        alert("transaction Successfull");
      }
    })
  }

  ConvertCartArray(){
    console.log("Mpika sthn convert!~!!");
    let finalProduct!: ShopProduct;
    for (const productArray of this.cartProducts) {
      productArray[0].Quantity = productArray.length;
      finalProduct = productArray[0];
      this.flattenCartProducts.push(finalProduct);
    }
  }

  CreateOrderHandler(){
    this.orderService.CreateOrder(this.paypalService.payPalFormData).subscribe(
      {
        next: response => {console.log(this.paypalService.payPalFormData)},
        error: error => console.log(error),
        complete: () => { console.log("Create Order Done")}
      }
    )
  }


}
