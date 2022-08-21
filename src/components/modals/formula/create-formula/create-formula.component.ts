import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormulaService } from 'src/components/formula/formula.service';
import { Formula } from 'src/components/models/formula';
import { CreateFormulaService } from './create-formula.service';
import { DatePipe } from '@angular/common';
import { UploadPhotoComponent } from 'src/components/upload-photo/upload-photo.component';
import { Product } from 'src/components/models/product';
import { ProductComponent } from 'src/components/product/product.component';
import { FormulaComponent } from 'src/components/formula/formula.component';


@Component({
  selector: 'app-create-formula',
  templateUrl: './create-formula.component.html',
  styleUrls: ['./create-formula.component.css']
})
export class CreateFormulaComponent implements OnInit, OnDestroy {

  @Input() formulaProducts!:Formula[];
  selectedProductsFormula!:Product[];
  productsBrands!:string[];
  products!:Product[];
  
  constructor(private formulaComponent:FormulaComponent,public createFormulaService:CreateFormulaService, private formulaService:FormulaService, public photoService:UploadPhotoComponent | null) { }

  CreateFormulaHandler(formulaName:string, formulaServiceType:string, formulaDuration:string,formulaCost:number):void{
    let formulaDate;
    console.log(this.selectedProductsFormula)
    // this.photoService?.OnUpload();
    // this.createFormulaService.showCreateFormulaForm = false;
    this.formulaService.CreateFormula({FormulaName:formulaName, CreationDate:formulaDate, Duration:formulaDuration, Cost:formulaCost, ServiceType:formulaServiceType, Products:this.selectedProductsFormula}as Formula)
    .subscribe(
      {
        next: response => console.log(response),
        error: error => console.log(error),
        complete: () => {console.log("Create Done"),this.formulaService.GetFormulas()}
      }
      )
  }

  GetingProductsBrand():void{
    this.products = this.formulaComponent.GetProductsBrands()
    console.log(this.products)
  }

  ngOnInit(): void {
    this.GetingProductsBrand();
  }

 

  ngOnDestroy(): void {
   
  }

}
