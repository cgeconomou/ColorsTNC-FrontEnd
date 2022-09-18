import { Component, OnInit } from '@angular/core';
import { ShopProduct } from '../models/shopProduct';
import { ShopProductService } from './shop-product.service';

@Component({
  selector: 'app-shop-product',
  templateUrl: './shop-product.component.html',
  styleUrls: ['./shop-product.component.css']
})
export class ShopProductComponent implements OnInit {

  loadingSpinner: boolean = true;
  shopProducts!: ShopProduct[];
  filteredShopProducts!: ShopProduct[];
  distinctCategories!:String[];
  cartProducts: ShopProduct[] = []
  searchCategory!:string;
  showCartModal: boolean = false;
  sortPrice: boolean = true;
  emptyImageUrl: string = "assets/Images/uploadPhoto.jpg";
  page: number = 1;
  count: number = 0;
  tableSize: number = 9;
  tableSizes: number[] = [9, 18, 27, 51];

  constructor(private service: ShopProductService) { }

  GetProductsHandler(){
    this.service.GetShopProducts().subscribe(
      {
        next: response=> 
        {
          this.shopProducts = response,
          this.distinctCategories = [...new Set(this.shopProducts.map(x=>x.Category))],
          this.filteredShopProducts = this.shopProducts
        },
        error: error => {console.log(error),this.loadingSpinner = false},
        complete: () => {console.log("ShopProduct Done"),this.loadingSpinner = false}
      }
    ) 
  }

  ShowCart(){
    this.showCartModal = true;
  }

  AddToCart(product:ShopProduct){
    if(product.Quantity > 0){
      this.cartProducts.push(product);
      product.Quantity -= 1;
    }
  }

  SortingProductsByPrice(){
    this.sortPrice = !this.sortPrice;
    if(this.sortPrice){
      this.filteredShopProducts = this.filteredShopProducts.sort((a,b)=> a.Price > b.Price ? -1:1);
    }
    else{
      this.filteredShopProducts = this.filteredShopProducts.sort((a,b)=> a.Price < b.Price ? -1:1);
    }
  }

  onTableDataChange(event: any): void{
    this.page = event;
  }

  onTableSizeChange(event: any): void{
    this.tableSize = event.target.value;
    this.page = 1;
    this.FilterByCategory();
  }

  FilterByCategory(): void{
    this.filteredShopProducts = this.shopProducts;
    if(this.searchCategory){
      this.filteredShopProducts = this.filteredShopProducts.filter(x=>x.Category.toUpperCase().includes(this.searchCategory.toUpperCase()));
    }
    this.page = 1;
  }

  ShowClearBtn(): void{
    this.searchCategory = '';
    this.GetProductsHandler();
  }

  ngOnInit(): void {
    this.GetProductsHandler();
  }

}
