import { Component, OnInit } from '@angular/core';
import { WarehouseProduct } from 'src/components/models/warehouseProduct';
import { ToggleWarehouseProductModalsService } from 'src/components/warehouse-product/toggle-warehouse-product-modals.service';
import { WarehouseProductComponent } from 'src/components/warehouse-product/warehouse-product.component';
import { WarehouseProductService } from 'src/components/warehouse-product/warehouse-product.service';
@Component({
  selector: 'app-create-warehouse-product',
  templateUrl: './create-warehouse-product.component.html',
  styleUrls: ['./create-warehouse-product.component.css']
})
export class CreateWarehouseProductComponent implements OnInit {
  //Constructor.....
  constructor(public toggleWarehouseProductModalsService:ToggleWarehouseProductModalsService, private warehouseProductService:WarehouseProductService, private warehouseProductComponent:WarehouseProductComponent) {
   }
  //Methods.....
  CreateWarehouseProductHandler(brand:string, colorCode:string, tubeQuantity:number, totalQuantity:number):void{
    this.toggleWarehouseProductModalsService.createWarehouseProductModalIsVisible = false
    this.warehouseProductService.CreateWarehouseProduct({Brand:brand, ColorCode:colorCode, TubeQuantity:tubeQuantity, TotalQuantity:totalQuantity,} as WarehouseProduct).subscribe(
        {
          next: response => {this.warehouseProductComponent.GetWarehouseProductsHandler() ,console.log(response)},
          error: error => console.log(error),
          complete: () => alert("Warehouse Product Done")
        }
       )
  }
  ngOnInit(): void {
  }
}