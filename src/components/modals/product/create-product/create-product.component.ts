import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/components/models/product';
import { ProductComponent } from 'src/components/product/product.component';
import { ProductService } from 'src/components/product/product.service';
import { CreateProductService } from './create-product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  
  expDate!:Date;
  constructor(private productService:ProductService, public createProductService:CreateProductService) { }
  
  CreateProductHandler(brand:string, colorCode:string, usedQuantity:number, tubeQuantity:number){
    this.productService.CreateProduct({Brand:brand, ColorCode:colorCode, UsedQuantity:usedQuantity, ExpDate:this.expDate, TubeQuantity:tubeQuantity,
      Formulas:null} as Product).subscribe(
        {
          next: response => console.log(response),
          error: error => console.log(error),
          complete: () => console.log("Create product Done")
        }
       )
  }

  ngOnInit(): void {
    
  }

}
