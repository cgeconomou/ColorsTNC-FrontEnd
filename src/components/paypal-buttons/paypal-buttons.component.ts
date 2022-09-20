import { Component, Input, OnInit } from '@angular/core';
import {render} from 'creditcardpayments/creditCardPayments'
import { ShopProduct } from '../models/shopProduct';
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
  constructor(private shopService: ShopProductService, private cart: ShopProductComponent) {}

  ngOnInit(): void {
    render({
      id:"#myPaypalButtons",
      currency:"USD",
      value:this.shopService.totalCartCost,
      onApprove:(details)=>{
        
        this.ConvertCartArray();
        this.shopService.PutShopProducts(this.flattenCartProducts);
        this.cart.cartProducts = [];
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


}
