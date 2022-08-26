import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormulaService } from 'src/components/formula/formula.service';
import { Formula } from 'src/components/models/formula';
import { CreateFormulaService } from './create-formula.service';
import { DatePipe } from '@angular/common';
import { UploadPhotoComponent } from 'src/components/upload-photo/upload-photo.component';
import { Product } from 'src/components/models/product';
import { ProductComponent } from 'src/components/product/product.component';
import { FormulaComponent } from 'src/components/formula/formula.component';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-create-formula',
  templateUrl: './create-formula.component.html',
  styleUrls: ['./create-formula.component.css']
})
export class CreateFormulaComponent implements OnInit, OnDestroy {

  @Input() formulaProducts!: Formula[];
  selectedProductsFormula!: string;
  productsBrands!: string[];
  products!: Product[];
  productTest!: Product[];
  imageUrl: string = "assets/Images/uploadPhoto.jpg";
  selectedFile!: File[];
  image = new Array<string>(4);
  filedata !:FormData;
  photo!:number;

  constructor(private formulaComponent: FormulaComponent, public createFormulaService: CreateFormulaService, private formulaService: FormulaService, public photoService: UploadPhotoComponent | null,private http : HttpClient) { }

  
  CreateFormulaHandler(formulaName: string, formulaServiceType: string, formulaDuration: string, formulaCost: number): void {
    let formulaDate;
    this.photo=1;
    this.GetingProductsBrand();
    this.products.forEach(product => {
      if (product.Brand == this.selectedProductsFormula) {
        product.Formulas = null;
        this.productTest = [{ ID: product.ID, Brand: product.Brand, ColorCode: product.ColorCode, UsedQuantity: product.UsedQuantity, ExpDate: product.ExpDate, TubeQuantity: product.TubeQuantity, Formulas: product.Formulas }]
      }
    });
    this.formulaService.CreateFormula({ FormulaName: formulaName, CreationDate: formulaDate,Cost: formulaCost, Duration: formulaDuration, ServiceType: formulaServiceType, FormulasPhotosid: this.photo, Products: this.productTest } as Formula)
      .subscribe(
        {
          next: response => console.log(response),
          error: error => console.log(error),
          complete: () => { console.log("Create Done") }
        }
      )
  };

  UploadPhotoHandler(){
    const filedata=new FormData();
    for(var i=0; i<this.selectedFile.length; i++){
      filedata.append('image', this.selectedFile[i], this.selectedFile[i].name);
    }
    this.http.post('https://localhost:44321/api/ImageFormula', filedata)
    .subscribe(res=>{
      console.log(res);
    })
  }

  fileToUpload: any;
  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);
    let reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }

  OnFileSelected(event: any) {
    this.selectedFile = <File[]>event.target.files;

  }

  GetingProductsBrand(): void {
    this.products = this.formulaComponent.GetProductsBrands()

  }

  ngOnInit(): void {
    this.GetingProductsBrand();
  }

  ngOnDestroy(): void {

  }

}
