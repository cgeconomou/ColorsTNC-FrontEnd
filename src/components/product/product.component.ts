import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products!:Product[];
  constructor(private productService:ProductService) { }

  GetProductsHandler():Product[]{
    this.productService.GetProducts().subscribe(
      {
        next: response=> this.products = response,
        error: error => console.log(error),
        complete: () => console.log("Product Done")
      }
    )
    console.log(this.products)
    return this.products;
  }

  ngOnInit(): void {
    this.GetProductsHandler();
  }

}
