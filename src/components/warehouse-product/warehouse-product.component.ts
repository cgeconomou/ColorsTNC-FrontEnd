import { Component, OnInit } from '@angular/core';
import { WarehouseProduct } from '../models/warehouseProduct';
import { ToggleWarehouseProductModalsService } from './toggle-warehouse-product-modals.service';
import { WarehouseProductService } from './warehouse-product.service';

@Component({
  selector: 'app-warehouse-product',
  templateUrl: './warehouse-product.component.html',
  styleUrls: ['./warehouse-product.component.css']
})
export class WarehouseProductComponent implements OnInit {

  //Variables.....
  loadingSpinner: boolean = true;
  warehouseProducts!: WarehouseProduct[];
  numberOfTubes!: number;
  selectedWarehouseProductForUpdate!:WarehouseProduct;

  //Constructor.....
  constructor(private warehouseProductService: WarehouseProductService, public toggleWarehouseProductModalsService:ToggleWarehouseProductModalsService) { }

  //Methods.....
  GetWarehouseProductsHandler(): WarehouseProduct[] {
    this.warehouseProductService.GetWarehouseProducts().subscribe(
      {
        next: response => { this.warehouseProducts = response },
        error: error => { console.log(error), this.loadingSpinner = false },
        complete: () => { console.log("WarehouseProducts Done"), this.loadingSpinner = false }
      }
    )
    return this.warehouseProducts;
  }
  AddTubesHandler(onUpdateWarehouseProduct: WarehouseProduct): void {
    onUpdateWarehouseProduct.TotalQuantity = onUpdateWarehouseProduct.TotalQuantity + onUpdateWarehouseProduct.TubeQuantity; //adding 1 tube to the totalQuantity
    this.warehouseProductService.UpdateWarehouseProduct(onUpdateWarehouseProduct).subscribe(
      {
        next: response => { this.GetWarehouseProductsHandler(), console.log(response) },
        error: error => console.log(error),
        complete: () => console.log("Update WarehouseProduct Done")
      }
    )
  }
  RemoveTubesHandler(onUpdateWarehouseProduct: WarehouseProduct): void {
    if (onUpdateWarehouseProduct.TotalQuantity > 0) {
      onUpdateWarehouseProduct.TotalQuantity = onUpdateWarehouseProduct.TotalQuantity - onUpdateWarehouseProduct.TubeQuantity; //removing 1 tube to the totalQuantity
      this.warehouseProductService.UpdateWarehouseProduct(onUpdateWarehouseProduct).subscribe(
        {
          next: response => { this.GetWarehouseProductsHandler(), console.log(response) },
          error: error => console.log(error),
          complete: () => console.log("Update WarehouseProduct Done")
        }
      )
    }
  }
  DeleteWareHouseProductHandler(id:number){
    this.warehouseProductService.DeleteWarehouseProduct(id).subscribe({
       next: response => { console.log(response) },
       error: error => console.log(error),
       complete: () => {console.log("Delete WarehouseProduct Done"), this.GetWarehouseProductsHandler()}
    })
  }
  SelectProductForUpdate(selectedWarehouseProduct:WarehouseProduct):void{
    this.selectedWarehouseProductForUpdate = selectedWarehouseProduct;
    this.toggleWarehouseProductModalsService.updateWarehouseProductModalIsVisible= true;
  }


  //Hooks....
  ngOnInit(): void {
    this.GetWarehouseProductsHandler();
  }

}
