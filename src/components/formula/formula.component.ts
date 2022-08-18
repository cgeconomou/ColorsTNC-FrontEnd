import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { CreateFormulaService } from '../modals/create-formula/create-formula.service';
import { UpdateFormulaService } from '../update-formula/update-formula.service';
import { FormulaService } from './formula.service';
import { Formula } from './model';


@Component({
  selector: 'app-formula',
  templateUrl: './formula.component.html',
  styleUrls: ['./formula.component.css']
})
export class FormulaComponent implements OnInit, OnChanges {

  formulas!: Array<Formula>;
  selectedFormula!: Formula;
 
  constructor(private formulaService:FormulaService,private router:Router, public createFormulaService:CreateFormulaService, public updateFormulaService:UpdateFormulaService) { }

  GetAllFormulasHandler(){
    this.formulaService.GetFormulas().subscribe(
      {
        next: response=> this.formulas = response,
        error: error => console.log(error),
        complete: () => console.log("Done")
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
  

  DetailsFormula(){
    this.router.navigate([''])
  }

  ngOnInit(): void {
    this.GetAllFormulasHandler();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("NAI!")
  }

}
