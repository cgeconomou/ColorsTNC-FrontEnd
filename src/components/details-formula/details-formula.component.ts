import { Component, OnInit} from '@angular/core';
import { DataService } from 'src/app/dataService';
import { FormulaService } from '../formula/formula.service';
import { Formula } from '../models/formula';

@Component({
  selector: 'app-details-formula',
  templateUrl: './details-formula.component.html',
  styleUrls: ['./details-formula.component.css']
})
export class DetailsFormulaComponent implements OnInit {

  selectedFormula!: Formula; 
  halfPath: string = "https://localhost:44321/";
  emptyImageUrl: string = "assets/Images/uploadPhoto.jpg";
  constructor( private dataService: DataService, private formulaService: FormulaService) {}
 
  ngOnInit(): void {
    console.log("Details on init");
    this.selectedFormula = this.dataService.GetTransferObject()
    console.log(this.selectedFormula);
  }

}
