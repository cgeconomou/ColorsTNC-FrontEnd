import { Component, Input, OnInit } from '@angular/core';
import { FormulaService } from 'src/components/formula/formula.service';
import { Formula } from 'src/components/formula/model';
import { UpdateFormulaService } from './update-formula.service';

@Component({
  selector: 'app-update-formula',
  templateUrl: './update-formula.component.html',
  styleUrls: ['./update-formula.component.css']
})
export class UpdateFormulaComponent implements OnInit {

  @Input() onUpdateFormula!: Formula;
 
  constructor(private formulaService:FormulaService, public updateFormulaService:UpdateFormulaService) { }

  UpdateFormulaHandler(){
    this.updateFormulaService.showUpdateForm = false;
    this.formulaService.UpdateFormula(this.onUpdateFormula).subscribe(
      {
        next: response => console.log(response),
        error: error => console.log(error),
        complete: () => console.log("Formula Update")
      }
    )
  }

  ngOnInit(): void {
  }

}
