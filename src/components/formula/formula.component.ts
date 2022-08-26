import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { CreateFormulaService } from '../modals/formula/create-formula/create-formula.service';
import { UpdateFormulaService } from '../modals/formula/update-formula/update-formula.service';
import { FormulaService } from './formula.service';
import { Formula } from '../models/formula';
import { ProductComponent } from '../product/product.component';
import { Product } from '../models/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subscriber } from 'rxjs';


@Component({
  selector: 'app-formula',
  templateUrl: './formula.component.html',
  styleUrls: ['./formula.component.css']
})
export class FormulaComponent implements OnInit, OnChanges {

  formulas!: Formula[];
  selectedFormula!: Formula;
  productsBrands!:string[];
  imageUrl: string = "assets/Images/uploadPhoto.jpg";
 
  constructor(private http:HttpClient, private productComponent:ProductComponent,private formulaService:FormulaService,private router:Router, public createFormulaService:CreateFormulaService, public updateFormulaService:UpdateFormulaService) { }

  GetAllFormulasHandler(){
    this.formulaService.GetFormulas().subscribe(
      {
        next: response=> this.formulas = response,
        error: error => console.log(error),
        complete: () => console.log("Formula Done")
      }
    )
  }
  setSingleImage(imageId:number):string{
    let formulaImage!:string;
    const headers = new HttpHeaders();
    this.http.get('https://localhost:44321/api/ImageFormula?id='+imageId,{headers,  responseType: 'blob'})
    .subscribe((data: Blob) =>{
      const observable = new Observable((subscriber: Subscriber<any>) => {
      const reader = new FileReader();
      reader.readAsDataURL(data);
      reader.onloadend = function(){
        subscriber.next(reader.result);
        subscriber.complete();
      }        
    });
    observable.subscribe(img=>{
      this.imageUrl = img;
    });      
  });
  return this.imageUrl;
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
    this.setSingleImage(1);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("NAI!")
  }

}
