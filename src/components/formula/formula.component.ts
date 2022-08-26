import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { CreateFormulaService } from '../modals/formula/create-formula/create-formula.service';
import { UpdateFormulaService } from '../modals/formula/update-formula/update-formula.service';
import { FormulaService } from './formula.service';
import { Formula } from '../models/formula';
import { ProductComponent } from '../product/product.component';
import { Product } from '../models/product';


@Component({
  selector: 'app-formula',
  templateUrl: './formula.component.html',
  styleUrls: ['./formula.component.css']
})
export class FormulaComponent implements OnInit, OnChanges {

  formulas!: Formula[];
  selectedFormula!: Formula;
  productsBrands!:string[];
 
  constructor(private productComponent:ProductComponent,private formulaService:FormulaService,private router:Router, public createFormulaService:CreateFormulaService, public updateFormulaService:UpdateFormulaService) { }

  GetAllFormulasHandler(){
    this.formulaService.GetFormulas().subscribe(
      {
        next: response=> this.formulas = response,
        error: error => console.log(error),
        complete: () => console.log("Formula Done")
      }
    )
  }

  UpadateFormulaHandler(formula:Formula){
    this.selectedFormula = formula;
    this.updateFormulaService.showUpdateForm = true;
  }

  DeleteFormulaHandler(id:number):void{
    this.formulaService.DeleteFormula(id).subscribe(
      {
        next: response => this.GetAllFormulasHandler(),
        error: error =>console.log(error),
        complete: () => console.log("formula Delete")
      }
    )
  }

  GetProductsBrands():Product[]{
    let products= this.productComponent.GetProductsHandler()

    return products;
   }
  

  DetailsFormula(){
    this.router.navigate([''])
  }

  ngOnInit(): void {
    this.GetAllFormulasHandler();
    this.GetProductsBrands();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("NAI!")
  }

}
