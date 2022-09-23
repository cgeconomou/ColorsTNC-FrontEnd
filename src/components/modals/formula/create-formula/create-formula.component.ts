import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormulaService } from 'src/components/formula/formula.service';
import { Formula } from 'src/components/models/formula';
import { CreateFormulaService } from './create-formula.service';
import { UploadPhotoComponent } from 'src/components/upload-photo/upload-photo.component';
import { Product } from 'src/components/models/product';
import { FormulaComponent } from 'src/components/formula/formula.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Photo } from 'src/components/models/formulaPhoto';
import { Observable, Subscriber } from 'rxjs';
import { WarehouseProduct } from 'src/components/models/warehouseProduct';
import { WarehouseProductService } from 'src/components/warehouse-product/warehouse-product.service';


@Component({
  selector: 'app-create-formula',
  templateUrl: './create-formula.component.html',
  styleUrls: ['./create-formula.component.css']
})
export class CreateFormulaComponent implements OnInit, OnDestroy {

  @Input() formulaProducts!: Formula[];
  selectedProducts: Product[]=[];
  productsBrands!: string[];
  
  productTest!: Product[];
  emptyImageUrl: string = "assets/Images/uploadPhoto.jpg";
  selectedFile!: File[];
  image = new Array<string>(4);
  filedata !: FormData;
  photoFormulaid!: number;
  photoFormulaFile!: any;
  photo!: Photo;
  photoUrl!: string;
  formulaImage!: string;
  showExtraProduct: boolean = false;
  testUrlPhoto!: string;
////////////////////////////////////////////////
  showStage1Main: boolean = true;
  showStage2Products: boolean = false;
  showStage3Photo: boolean = false;
  formula!:any;
  formulaName!:string;
  formulaCost!:number;
  formulaDuration!:string;
  formulaServiceType!:string;
  formulaPhotosUrl!:string;
  products!: Product[];
  formulaCreationDate!:Date;
  formulaId!:number;
  warehouseProducts!:WarehouseProduct[];
  selectedWarehouseProducts:WarehouseProduct[]= [];
  selectedWarehouseProductsQuantities:number[] =[];
  tempProduct!:Product;

  constructor(private formulaComponent: FormulaComponent, public createFormulaService: CreateFormulaService,private formulaService:FormulaService, private warehouseProductService: WarehouseProductService, public photoService: UploadPhotoComponent | null, private http: HttpClient) { }

  ShowActivePage1() {
    this.showStage1Main = true;
    this.showStage2Products = false;
    this.showStage3Photo = false;
  }
  ShowActivePage2() {
    this.showStage1Main = false;
    this.showStage2Products = true;
    this.showStage3Photo = false;
  }
  ShowActivePage3() {
    this.showStage1Main = false;
    this.showStage2Products = false;
    this.showStage3Photo = true;
  }
  getFormulaProduct(e: any) {
    console.log(e);
  }

  // formulaName: string, formulaServiceType: string, formulaDuration: string, formulaCost: number
  CreateFormulaHandler(): void {
    
    this.createFormulaService.showCreateFormulaForm = false;
    let formulaDate;

    this.formulaService.CreateFormula({ FormulaName: this.formulaName, CreationDate: formulaDate, Cost: this.formulaCost, Duration: this.formulaDuration, ServiceType: this.formulaServiceType, FormulasPhotosid: this.photoFormulaid, FormulasPhotosUrl: this.testUrlPhoto, Products: this.selectedProducts } as Formula)
      .subscribe(
        {
          next: response => { console.log("Next ", response) },
          error: error => console.log(error),
          complete: () => { console.log("Create Done"), this.formulaComponent.GetAllFormulasHandler() }
        }
      )
  };
  GetWarehouseProductsHandler(): WarehouseProduct[] {
    this.warehouseProductService.GetWarehouseProducts().subscribe(
      {
        next: response => { this.warehouseProducts = response },
        error: error => console.log(error) ,
        complete: () => { console.log("WarehouseProducts Done")}
      }
    )
    return this.warehouseProducts;
  }

  CreateFormulaStage1Form(): void{
    this.ShowActivePage2();
  }
  
  // i:number =0;
  
  CreateFormulaStage2Products(){
    for(let i=0; i<this.selectedWarehouseProducts.length; i++){
      let temp:any =this.selectedWarehouseProducts[i];
      let arr:string =temp.split('--');
      let brand = arr[0];
      let colorCode = arr[1];
      let usedQuantity = this.selectedWarehouseProductsQuantities[i];
      this.tempProduct =({Brand:brand,ColorCode:colorCode, UsedQuantity:usedQuantity})as Product;
      this.selectedProducts.push(this.tempProduct); 
    }
    console.log(this.selectedProducts);
    this.ShowActivePage3();
  }
  
  UploadPhotoHandler() {
    const filedata = new FormData();
    for (var i = 0; i < this.selectedFile.length; i++) {
      filedata.append('image', this.selectedFile[i], this.selectedFile[i].name);
    }
    this.http.post('https://localhost:44321/api/Photo/UploadFile', filedata)
      .subscribe(
        {
          next: response => { console.log(response), this.testUrlPhoto = response.toString() },
          error: error => console.log(error),
          complete: () => { console.log("Create Done"), console.log(this.testUrlPhoto) }
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

  GettingProducts(): void {
    this.products = this.formulaComponent.GetProducts()
  }

  ShowProductToAdd(): void {
    this.showExtraProduct = !this.showExtraProduct;
    console.log(this.showExtraProduct);
  }

  ngOnInit(): void {
    //this.GettingProducts();
    this.GetWarehouseProductsHandler();
  }

  ngOnDestroy(): void {

  }

}
