import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private http: HttpClient) { }
  headers: HttpHeaders= new HttpHeaders({
    "Content-Type":"application/json"
  })
  uploadFile(formData){
    let urlApi='http://localhost:3000/foto';
    console.log(formData);
    return this.http.post(urlApi,formData);
  }
  descargaPhoto(formData){
    let urlApi='http://localhost:2498/multer';
    return this.http.post(urlApi,formData);
  }
}
