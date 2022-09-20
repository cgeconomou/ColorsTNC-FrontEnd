import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { combineLatestWith } from 'rxjs';
import { FormulaComponent } from 'src/components/formula/formula.component';
import { FormulaService } from 'src/components/formula/formula.service';
import { Formula } from 'src/components/models/formula';
import { Product } from 'src/components/models/product';
import { UpdateFormulaService } from './update-formula.service';

@Component({
  selector: 'app-update-formula',
  templateUrl: './update-formula.component.html',
  styleUrls: ['./update-formula.component.css']
})
export class UpdateFormulaComponent implements OnInit {

  @Input() onUpdateFormula!: Formula;
  selectedProducts: Product[] = new Array<Product>;
  productTest!: any;
  products!:Product[];
  formulaProductIds!:number;
  @ViewChild('updateForm') form!: NgForm;

  constructor(private formulaComponent: FormulaComponent, private formulaService:FormulaService, public updateFormulaService:UpdateFormulaService) { }

  UpdateFormulaHandler(){
    this.updateFormulaService.showUpdateForm = false;
    this.onUpdateFormula.Products = this.selectedProducts;
    console.log("EDWWWWWWWW");
    console.log( this.onUpdateFormula.Products);
    this.updateFormulaService.showUpdateForm = false;
    this.formulaService.UpdateFormula(this.onUpdateFormula).subscribe(

      {
        next: response => {this.formulaComponent.GetAllFormulasHandler(), console.log(response)},
        error: error => console.log(error),
        complete: () => console.log("Formula Update")
      }
    )
  }

  GetingProducts(): void {
    this.products = this.formulaComponent.GetProducts();
    
  }

  ngOnInit(): void {
    this.GetingProducts();
  }


}
