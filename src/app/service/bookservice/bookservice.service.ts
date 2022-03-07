import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpserviceService } from '../httpservice/httpservice.service';

@Injectable({
  providedIn: 'root'
})
export class BookserviceService {

  token:any;
  constructor(private httpService:HttpserviceService) {
    this.token=localStorage.getItem('token')
  } 

  getBooks(){
    console.log("token === ",this.token);
    
    let header={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':this.token
      })

    }
    return this.httpService.getData('bookstore_user/get/book', true, header)
  }
}
