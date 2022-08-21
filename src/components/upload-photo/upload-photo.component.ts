import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-photo',
  templateUrl: './upload-photo.component.html',
  styleUrls: ['./upload-photo.component.css']
})
export class UploadPhotoComponent implements OnInit {

  imageUrl:string="assets/Images/uploadPhoto.jpg";
  selectedFile!:File;
  constructor( private http:HttpClient) { }
  OnFileSelected(event:any){
    this.selectedFile=<File>event.target.files[0];
  }
  OnUpload(){
    const fileData = new FormData();
    fileData.append('image',this.selectedFile,this.selectedFile.name);
    this.http.post('https://localhost:44321/api/ColorFormula',fileData)
    .subscribe(res=>{
      console.log(res);
    })
    this. imageUrl="assets/Images/uploadPhoto.jpg";
  }

  fileToUpload:any;
  handleFileInput(file:FileList){
    this.fileToUpload = file.item(0);
    let reader = new FileReader();
    reader.onload = (event:any)=>{
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }
  ngOnInit(): void {
  }

}
