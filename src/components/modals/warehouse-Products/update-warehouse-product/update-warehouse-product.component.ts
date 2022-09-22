import { Component, Input, OnInit } from '@angular/core';
import { WarehouseProduct } from 'src/components/models/warehouseProduct';
import { ToggleWarehouseProductModalsService } from 'src/components/warehouse-product/toggle-warehouse-product-modals.service';
import { WarehouseProductComponent } from 'src/components/warehouse-product/warehouse-product.component';
import { WarehouseProductService } from 'src/components/warehouse-product/warehouse-product.service';

@Component({
  selector: 'app-update-warehouse-product',
  templateUrl: './update-warehouse-product.component.html',
  styleUrls: ['./update-warehouse-product.component.css']
})
export class UpdateWarehouseProductComponent implements OnInit {
  //Variables.....
  @Input() WarehouseProductToUpdate!:WarehouseProduct;

  //Constructor.....
  constructor(public toggleWarehouseProductModalsService:ToggleWarehouseProductModalsService, private warehouseProductService:WarehouseProductService,private warehouseProductComponent:WarehouseProductComponent) { }

  //Methods.....
  UpdateWarehouseProductHandler(id:number,brand:string, colorCode:string, tubeQuantity:number, totalQuantity:number):void{
    this.toggleWarehouseProductModalsService.updateWarehouseProductModalIsVisible = false
    this.warehouseProductService.UpdateWarehouseProduct({Id: id , Brand:brand, ColorCode:colorCode, TubeQuantity:tubeQuantity, TotalQuantity:totalQuantity,} as WarehouseProduct).subscribe(
        {
          next: response => {this.warehouseProductComponent.GetWarehouseProductsHandler(), console.log(response)},
          error: error => console.log(error),
          complete: () => alert("Warehouse Product with id "+id+" was updated")
        }
       )
  }
  
  //Hooks.....
  ngOnInit(): void {
  }

}
