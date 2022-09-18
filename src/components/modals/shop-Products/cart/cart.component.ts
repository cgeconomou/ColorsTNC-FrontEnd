import { Component, Input, OnInit } from '@angular/core';
import { ShopProduct } from '../../../models/shopProduct';
import { ShopProductComponent } from '../../../shop-product/shop-product.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input() productsInCart!: ShopProduct[];
  emptyImageUrl: string = "assets/Images/uploadPhoto.jpg";
  constructor( private shop: ShopProductComponent) { }

  ngOnInit(): void {
    console.log(this.productsInCart);
  }

  ProductDetails(product: ShopProduct){
    this.shop.ShowProductDetails(product)
  }

  RemoveProduct(productIndex: number){
    console.log(productIndex);
    this.productsInCart.splice(productIndex,1);
  }

  CloseCartModal(){
    this.shop.showCartModal = false;
  }

}
