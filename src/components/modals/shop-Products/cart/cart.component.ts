import { Component, Input, OnInit } from '@angular/core';
import { ShopProductService } from 'src/components/shop-product/shop-product.service';
import { ShopProduct } from '../../../models/shopProduct';
import { ShopProductComponent } from '../../../shop-product/shop-product.component';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input() productsInCart: Array<Array<ShopProduct>> = [];
  emptyImageUrl: string = "assets/Images/uploadPhoto.jpg";
  isEmpty: boolean = true;
  constructor(private shopService: ShopProductService, private shop: ShopProductComponent, public cartService: CartService) {
   
   }

  ngOnInit(): void {
    console.log(this.productsInCart);
    this.cartService.payPalBtnVisible = false;
    this.EmptyCartMsg()
  }

  EmptyCartMsg(){
    if(this.productsInCart.length > 0){
      this.isEmpty = false;
    }
    else{
      this.isEmpty = true;
    }
  }

  ProductDetails(product: ShopProduct){
    this.shop.ShowProductDetails(product)
  }

  RemoveProduct(productIndex: number, productInShop: ShopProduct, products: ShopProduct[]){
    this.AddProductQuantityInShop(productIndex,productInShop);
    this.shopService.cartProductCount = this.shopService.cartProductCount - this.productsInCart[productIndex].length;
    this.shopService.totalCartCost -= products.length * productInShop.Price
    this.productsInCart.splice(productIndex,1);
    let rowProductTotalCost = 0;
    this.shopService.totalCartCost = parseFloat((this.shopService.totalCartCost - rowProductTotalCost).toFixed(2));
    this.EmptyCartMsg();
  }

  AddProductQuantityInShop(productIndex: number, productInShop: ShopProduct){
    if(this.shop.shopProducts.find(x=>x == productInShop)){
      productInShop.Quantity += this.productsInCart[productIndex].length;
    }
  }

  IncreaseProductQuantInCart(productIndex: number,productInShop: ShopProduct){
    if(this.shop.shopProducts.find(x=>x == productInShop)){
      if(productInShop.Quantity > 0){
        this.productsInCart[productIndex].length ++;
        productInShop.Quantity --;
        this.shopService.cartProductCount ++;
        this.shopService.totalCartCost = parseFloat((this.shopService.totalCartCost + productInShop.Price).toFixed(2));
        console.log(`cartCost ${this.shopService.totalCartCost} TImi product${productInShop.Price}`);
      }
      else{
        alert("Δεν υπάρχουν άλλα διαθέσιμα προιόντα")
      }
    }
  }

  DecreaseProductQuantInCart(productIndex: number,productInShop: ShopProduct){
    if(this.shop.shopProducts.find(x=>x == productInShop)){
      if(productInShop.Quantity < 10){
        this.productsInCart[productIndex].length --;
        productInShop.Quantity ++;
        this.shopService.cartProductCount --;
        this.shopService.totalCartCost = parseFloat((this.shopService.totalCartCost - productInShop.Price).toFixed(2));
        console.log(`cartCost ${this.shopService.totalCartCost} TImi product${productInShop.Price}`);
      }
     if(this.productsInCart[productIndex].length == 0){
        this.productsInCart.splice(productIndex,1);
        this.EmptyCartMsg();
        console.log(`cartCost ${this.shopService.totalCartCost} TImi product${productInShop.Price}`);
      }
    }
  }

  CloseCartModal(){
    this.shopService.showCartModal = false;
  }

}
