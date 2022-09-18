import { Component, Input, OnInit } from '@angular/core';
import { ShopProduct } from 'src/components/models/shopProduct';
import { ShopProductComponent } from 'src/components/shop-product/shop-product.component';

@Component({
  selector: 'app-shop-product-details',
  templateUrl: './shop-product-details.component.html',
  styleUrls: ['./shop-product-details.component.css']
})
export class ShopProductDetailsComponent implements OnInit {

  @Input() productDetails!: ShopProduct;
  emptyImageUrl: string = "assets/Images/uploadPhoto.jpg";
  constructor(private shop:ShopProductComponent) { }

  ngOnInit(): void {
    console.log( this.productDetails);
  }

  CloseDetailsModal(){
    this.shop.showProductDetailsModal = false;
  }

}
