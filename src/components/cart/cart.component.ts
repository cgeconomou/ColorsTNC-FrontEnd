import { Component, Input, OnInit } from '@angular/core';
import { ShopProduct } from '../models/shopProduct';
import { ShopProductComponent } from '../shop-product/shop-product.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input() productsInCart!: ShopProduct[];
  constructor( private shop: ShopProductComponent) { }

  ngOnInit(): void {
    console.log(this.productsInCart);
  }

  CloseCartModal(){
    this.shop.showCartModal = false;
  }

}
