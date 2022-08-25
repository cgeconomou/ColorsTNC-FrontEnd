import { Component, OnInit } from '@angular/core';
import { CreateProductComponent } from '../modals/product/create-product/create-product.component';
import { CreateProductService } from '../modals/product/create-product/create-product.service';
import { UpdateProductService } from '../modals/product/update-product/update-product.service';
import { Product } from '../models/product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products!:Product[];
  showCreateProductForm: boolean = false;
  selectedProduct!: Product;
  constructor(private productService:ProductService,public createProductService:CreateProductService, public updateProductService:UpdateProductService) { }

  GetProductsHandler():Product[]{
    this.productService.GetProducts().subscribe(
      {
        next: response=> {this.products = response,console.log(this.products)},
        error: error => console.log(error),
        complete: () => console.log("Product Done")
      }
    )
    console.log(this.products)
    return this.products;
  }

  UpdateProdcutHandler(myProduct:Product){
    this.selectedProduct = myProduct;
    this.updateProductService.showUpdateProductForm = true;
  }

  DeleteProductHandler(id:number){
    this.productService.DeleteProduct(id).subscribe(
      {
        next: response => this.GetProductsHandler(),
        error: error => console.log(error),
        complete: () => console.log("product Deleted")
      }
    )
  }

  ngOnInit(): void {
    this.GetProductsHandler();
  }

}
