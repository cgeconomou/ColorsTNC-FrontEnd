import { Component, Input, OnInit } from '@angular/core';
import { ShopProductService } from 'src/components/shop-product/shop-product.service';
import { ShopProduct } from '../../../models/shopProduct';
import { ShopProductComponent } from '../../../shop-product/shop-product.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input() productsInCart!: Array<Array<ShopProduct>>;
  emptyImageUrl: string = "assets/Images/uploadPhoto.jpg";
  constructor(private cartService: ShopProductService, private shop: ShopProductComponent) { }

  ngOnInit(): void {
    console.log(this.productsInCart);
  }

  ProductDetails(product: ShopProduct){
    this.shop.ShowProductDetails(product)
  }

  RemoveProduct(productIndex: number, productInShop: ShopProduct){
    console.log(productIndex);
    this.AddProductQuantity(productIndex,productInShop);
    this.cartService.cartProductCount = this.cartService.cartProductCount - this.productsInCart[productIndex].length;
    this.productsInCart.splice(productIndex,1);
  }

  AddProductQuantity(productIndex: number, productInShop: ShopProduct){
    
    if(this.shop.shopProducts.find(x=>x == productInShop)){
      
      productInShop.Quantity += this.productsInCart[productIndex].length;
    }
  }

  CloseCartModal(){
    this.shop.showCartModal = false;
  }

}
