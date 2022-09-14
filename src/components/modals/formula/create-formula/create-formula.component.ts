import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormulaService } from 'src/components/formula/formula.service';
import { Formula } from 'src/components/models/formula';
import { CreateFormulaService } from './create-formula.service';
import { DatePipe } from '@angular/common';
import { UploadPhotoComponent } from 'src/components/upload-photo/upload-photo.component';
import { Product } from 'src/components/models/product';
import { ProductComponent } from 'src/components/product/product.component';
import { FormulaComponent } from 'src/components/formula/formula.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Photo } from 'src/components/models/formulaPhoto';
import { Observable, Subscriber } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-create-formula',
  templateUrl: './create-formula.component.html',
  styleUrls: ['./create-formula.component.css']
})
export class CreateFormulaComponent implements OnInit, OnDestroy {

  @Input() formulaProducts!: Formula[];
  selectedProducts!: Product[];
  productsBrands!: string[];
  products!: Product[];
  productTest!: Product[];
  emptyImageUrl: string = "assets/Images/uploadPhoto.jpg";
  selectedFile!: File[];
  image = new Array<string>(4);
  filedata !:FormData;
  photoFormulaid!:number;
  photoFormulaFile!:any;
  photo!:Photo;
  photoUrl!:string;
  formulaImage!: string;
  showExtraProduct: boolean = false;
  testUrlPhoto!: string;
  

  constructor(private domService: DomSanitizer ,private formulaComponent: FormulaComponent, public createFormulaService: CreateFormulaService, private formulaService: FormulaService, public photoService: UploadPhotoComponent | null,private http : HttpClient) { }

  getFormulaProduct(e:any){
    console.log(e);
  }
  
  CreateFormulaHandler(formulaName: string, formulaServiceType: string, formulaDuration: string, formulaCost: number): void {
    this.createFormulaService.showCreateFormulaForm = false;
    let formulaDate;
    
    this.formulaService.CreateFormula({ FormulaName: formulaName, CreationDate: formulaDate,Cost: formulaCost, Duration: formulaDuration, ServiceType: formulaServiceType, FormulasPhotosid: this.photoFormulaid,FormulasPhotosUrl:this.testUrlPhoto, Products: this.selectedProducts } as Formula)
      .subscribe(
        {
          next: response => {console.log(response)},
          error: error => console.log(error),
          complete: () => { console.log("Create Done"),this.formulaComponent.GetAllFormulasHandler()}
        }
      )
  };

  UploadPhotoHandler(){
    const filedata=new FormData();
    for(var i=0; i<this.selectedFile.length; i++){
      filedata.append('image', this.selectedFile[i], this.selectedFile[i].name);
    }
    this.http.post('https://localhost:44321/api/Photo/UploadFile', filedata)
    .subscribe(
      {
        next: response =>{console.log(response), this.testUrlPhoto = response.toString()},
        error: error => console.log(error),
        complete: () => { console.log("Create Done"),console.log(this.testUrlPhoto) }
      }  
    )
  }

  
  setSingleImage(imageId: number): string {
   
    const headers = new HttpHeaders();
    this.http.get('https://localhost:44321/api/ImageFormula?id=' + imageId, { headers, responseType: 'blob' })
      .subscribe((data: Blob) => {
        const observable = new Observable((subscriber: Subscriber<any>) => {
          const reader = new FileReader();
          reader.readAsDataURL(data);
          reader.onloadend = function () {
            subscriber.next(reader.result);
            subscriber.complete();
          }
        });
        observable.subscribe(img => {
          console.log("auto einai to img")
          this.formulaImage = img;
          console.log(img)
        });
      });
      console.log("autp eiani to this formula")
      
      console.log(this.formulaImage)
    return this.formulaImage;
  }

// GettingPhotoId(){
//   let photos  =this.UploadPhotoHandler() as Photo;
//   this.photoFormulaid = photos.Id;
//   console.log(this.photoFormulaid);
// }

  fileToUpload: any;
  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);
    let reader = new FileReader();
    reader.onload = (event: any) => {
      this.emptyImageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }

  OnFileSelected(event: any) {
    this.selectedFile = <File[]>event.target.files;

  }

  GetingProductsBrand(): void {
    this.products = this.formulaComponent.GetProductsBrands()
  }

  ShowProductToAdd(): void{
    this.showExtraProduct = !this.showExtraProduct;
    console.log(this.showExtraProduct);
  }

  ngOnInit(): void {
    this.GetingProductsBrand();
  }

  ngOnDestroy(): void {

  }

}
