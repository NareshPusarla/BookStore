import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpserviceService } from '../httpservice/httpservice.service';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private httpService:HttpserviceService) { }

  userRegister(data:any){
    let header={
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    }
    return this.httpService.postData('bookstore_user/registration', data, false, header)
  }

  userLogin(data:any){
    let header={
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    }
    return this.httpService.postData('bookstore_user/login', data, false, header)
  }

  
}
