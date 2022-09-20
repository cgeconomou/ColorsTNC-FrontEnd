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
  constructor(private cartService: ShopProductService, private shop: ShopProductComponent, private shopService: ShopProductService) { }

  ngOnInit(): void {
    console.log(this.productsInCart);
  }

  ProductDetails(product: ShopProduct){
    this.shop.ShowProductDetails(product)
  }

  RemoveProduct(productIndex: number, productInShop: ShopProduct, products: ShopProduct[]){
    this.AddProductQuantityInShop(productIndex,productInShop);
    this.cartService.cartProductCount = this.cartService.cartProductCount - this.productsInCart[productIndex].length;
    this.shopService.totalCartCost -= products.length * productInShop.Price
    this.productsInCart.splice(productIndex,1);
    let rowProductTotalCost = 0;
    this.shopService.totalCartCost = parseFloat((this.shopService.totalCartCost - rowProductTotalCost).toFixed(2));
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
        this.cartService.cartProductCount ++;
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
        this.cartService.cartProductCount --;
        this.shopService.totalCartCost = parseFloat((this.shopService.totalCartCost - productInShop.Price).toFixed(2));
        console.log(`cartCost ${this.shopService.totalCartCost} TImi product${productInShop.Price}`);
      }
     if(this.productsInCart[productIndex].length == 0){
        this.productsInCart.splice(productIndex,1);
        console.log(`cartCost ${this.shopService.totalCartCost} TImi product${productInShop.Price}`);
      }
    }
  }

  CloseCartModal(){
    this.shop.showCartModal = false;
  }

}
