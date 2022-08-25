import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/components/models/product';
import { ProductService } from 'src/components/product/product.service';
import { CreateProductService } from '../create-product/create-product.service';
import { UpdateProductService } from './update-product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  expDate!: Date;
  @Input() onUpdateProduct!:Product;

  constructor(private productService:ProductService, public updateProduct:UpdateProductService) { }

  UpdateProductHandler(){
    this.onUpdateProduct.ExpDate = this.expDate;
    this.updateProduct.showUpdateProductForm = false;
    this.productService.UpdateProduct(this.onUpdateProduct).subscribe(
        {
          next: response => console.log(response),
          error: error => console.log(error),
          complete: () => console.log("Update product Done")
        }
       )
  }

  ngOnInit(): void {
    this.expDate = this.onUpdateProduct.ExpDate;
  }

}
