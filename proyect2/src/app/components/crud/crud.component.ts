import { Component, OnInit } from '@angular/core';
import { formatDiagnostic } from 'typescript';
import { UploadService } from "../../services/upload.service";
import { HttpClient} from '@angular/common/http';
import {UserInterface}from '../model/user.interface'
import { __await } from 'tslib';
interface Food {
  value: string;
  viewValue: string;
}
interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

/**
 * @title Select in a form
 */

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css',
              './vendor/bootstrap/css/bootstrap.min.css',
              './vendor/fontawesome-free/css/all.min.css',
              './vendor/datatables/dataTables.bootstrap4.css',
              './css/sb-admin.css'
              
             ]
})

export class CRUDComponent implements OnInit {
  uploadedFiles: Array<File>;
  nombre:string="";
  apellido:string="";
  pais:string="";
  fecha:string="";
  correo:string="";
  password:string="";
  urlfoto:string="";
  model:string=""
  exampleHeader:string=""
  selectedviewValue: string;
  hide = true;
  hide1=true;
  contra:string="";
  Fotos: UserInterface[]=[]

  photoSelected: string | ArrayBuffer;
  file: File;

  foods: Food[] = [
    {value: 'Guatemala', viewValue: 'Guatemala'},
    {value: 'Panamá', viewValue: 'Panamá'},
    {value: 'Honduras', viewValue: 'Honduras'},
    {value: 'El Salvador', viewValue: 'El Salvador'},
    {value: 'Costa Rica', viewValue: 'Costa Rica'},
    {value: 'Belice', viewValue: 'Belice'},
    {value: 'México', viewValue: 'México'},
    {value: 'Nicaragua', viewValue: 'Nicaragua'},
    {value: 'Estados Unidos', viewValue: 'Estados Unidos'},
    {value: 'Canadá', viewValue: 'Canadá'},
    {value: 'Colombia', viewValue: 'Colombia'},
    {value: 'Ecuador', viewValue: 'Ecuador'},
    {value: 'Perú', viewValue: 'Perú'},
    {value: 'Chile', viewValue: 'Chile'},
    {value: 'Argentina', viewValue: 'Argentina'},
    {value: 'Venezuela', viewValue: 'Venezuela'},
    {value: 'Brazil', viewValue: 'Brazil'},
    {value: 'Bolivia', viewValue: 'Bolivia'},
    {value: 'Paraguay', viewValue: 'Paraguay'},
    {value: 'Uruguay', viewValue: 'Uruguay'}
  ];
  /*constructor(private http: HttpClient) {
  }*/
  
  /*constructor(private UploadServices: UploadService) {
   }*/

  ngOnInit(): void {
    
  }
  constructor(private serviceUpload: UploadService, private http: HttpClient) {}

  onUpload(e){
    e.preventDefault()
    let formData=new FormData();
    for (let i = 0; i < this.uploadedFiles.length; i++) {
      formData.append("uploads[]", this.uploadedFiles[i], this.uploadedFiles[i].name);      
    }
    /*this.serviceUpload.descargaPhoto(formData).subscribe((res)=> {
      console.log('response received is ',res);
    })*/
    
    alert(e)
    
    this.serviceUpload.uploadFile(formData).subscribe((res)=> {
      console.log('response received is ',JSON.stringify(res));
      let temporal=JSON.stringify(res).split("\"", 4); 
      this.urlfoto=temporal[3];
      alert(this.urlfoto);
    });
    
    //alert("Su información ha sido enviada a su correo verifique en en breves momentos");
  }

  onFileChange(e){
    e.preventDefault()
    this.uploadedFiles= e.target.files;
  }
  ViewUser(){
    this.uploadedFiles
    console.log(this.selectedviewValue, this.nombre, this.apellido, this.fecha, this.correo, this.urlfoto,
      this.uploadedFiles, this.urlfoto, this.file)
  }

  onPhotoSelected(event: HtmlInputEvent, e: any): void {
    e.preventDefault();
    event.preventDefault();
    if (event.target.files && event.target.files[0]) {
      this.file = <File>event.target.files[0];
      this.uploadedFiles= e.target.files;
      
      // image preview
      const reader = new FileReader();
      reader.onload = e => this.photoSelected = reader.result;
      reader.readAsDataURL(this.file);
    }
  }

  uploadFile(){
    let formData=new FormData();
    for (let i = 0; i < this.uploadedFiles.length; i++) {
      formData.append("uploads[]", this.uploadedFiles[i], this.uploadedFiles[i].name);      
    }
    this.serviceUpload.descargaPhoto(formData).subscribe((res)=> {
      console.log('response received is ',res);
    })

  }
  private image:ImageSelected =  null;
  onUploadFinish(event) {
    event.preventDefault();
    console.log(event.file.name);
    this.image = new ImageSelected;
    this.image.image = event.src;
    this.image.name = event.file.name;
  }
  sendImage(){    
    if(this.image != null){
      console.log('send image', this.image.image);
      this.http.post('http://localhost:3000/upload', {
        file: this.image.image,
        name: this.image.name
      }).subscribe((d) => {
        console.log(d);
      })
    }
  }
}


class ImageSelected {
  public name: String;
  public image: String;
}

interface URLfoto{
  url: string
}