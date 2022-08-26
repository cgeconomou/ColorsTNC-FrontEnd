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
import { Photo } from 'src/components/models/formulaPhoto';


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
  photoFormulaid!:number;
  photo!:Photo;

  constructor(private formulaComponent: FormulaComponent, public createFormulaService: CreateFormulaService, private formulaService: FormulaService, public photoService: UploadPhotoComponent | null,private http : HttpClient) { }

  
  CreateFormulaHandler(formulaName: string, formulaServiceType: string, formulaDuration: string, formulaCost: number): void {
    let formulaDate;
    this.GetingProductsBrand();
    this.products.forEach(product => {
      if (product.Brand == this.selectedProductsFormula) {
        product.Formulas = null;
        this.productTest = [{ ID: product.ID, Brand: product.Brand, ColorCode: product.ColorCode, UsedQuantity: product.UsedQuantity, ExpDate: product.ExpDate, TubeQuantity: product.TubeQuantity, Formulas: product.Formulas }]
      }
    });
    this.photoFormulaid = this.photo.Id;
    console.log("edw einai to id tis photos")
    console.log(this.photoFormulaid)
    this.formulaService.CreateFormula({ FormulaName: formulaName, CreationDate: formulaDate,Cost: formulaCost, Duration: formulaDuration, ServiceType: formulaServiceType, FormulasPhotosid: this.photoFormulaid, Products: this.productTest } as Formula)
      .subscribe(
        {
          next: response => console.log(response),
          error: error => console.log(error),
          complete: () => { console.log("Create Done") }
        }
      )
  };

  UploadPhotoHandler():Object{
    const filedata=new FormData();
    for(var i=0; i<this.selectedFile.length; i++){
      filedata.append('image', this.selectedFile[i], this.selectedFile[i].name);
    }
    this.http.post('https://localhost:44321/api/ImageFormula', filedata)
    .subscribe(
      {
        next: response =>{ console.log(response),this.photo=response as Photo},
        error: error => console.log(error),
        complete: () => { console.log("Create Done") }
      }
      
    )
    return this.photo;
  }

GettingPhotoId(){
  let photos  =this.UploadPhotoHandler() as Photo;
  this.photoFormulaid = photos.Id;
  console.log(this.photoFormulaid);
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
