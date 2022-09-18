import { Component, Input, OnInit } from '@angular/core';
import { ShopProduct } from 'src/components/models/shopProduct';
import { ShopProductComponent } from 'src/components/shop-product/shop-product.component';

@Component({
  selector: 'app-mini-cart-view',
  templateUrl: './mini-cart-view.component.html',
  styleUrls: ['./mini-cart-view.component.css']
})
export class MiniCartViewComponent implements OnInit {

  @Input() productsInCart!: ShopProduct[]
  productsInCartCount!: number;
  emptyImageUrl: string = "assets/Images/uploadPhoto.jpg";
  constructor(private shopCart: ShopProductComponent) { }

  ngOnInit(): void {
    this.productsInCartCount = this.productsInCart.length
  }

  ShowCartModal(){
    this.shopCart.showCartModal = true;
    this.shopCart.showMiniCartView = false;
  }

  CloseCartModal(){
    this.shopCart.showMiniCartView = false;
  }

}
