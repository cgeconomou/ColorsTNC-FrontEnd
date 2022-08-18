import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormulaService } from 'src/components/formula/formula.service';
import { Formula } from 'src/components/formula/model';
import { CreateFormulaService } from './create-formula.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-create-formula',
  templateUrl: './create-formula.component.html',
  styleUrls: ['./create-formula.component.css']
})
export class CreateFormulaComponent implements OnInit, OnDestroy {

  
  
  constructor(public createFormulaService:CreateFormulaService, private formulaService:FormulaService) { }

  CreateFormulaHandler(formulaName:string, formulaServiceType:string, formulaDuration:string,formulaCost:number):void{
    let formulaDate;
    this.createFormulaService.showCreateFormulaForm = false;
    this.formulaService.CreateFormula({FormulaName:formulaName, CreationDate:formulaDate, Duration:formulaDuration, Cost:formulaCost, ServiceType:formulaServiceType}as Formula)
    .subscribe(
      {
        next: response => console.log(response),
        error: error => console.log(error),
        complete: () => {console.log("Create Done"),this.formulaService.GetFormulas()}
      }
      )
  }

 


  ngOnInit(): void {
  }

 

  ngOnDestroy(): void {
   
  }

}
