import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpserviceService } from '../httpservice/httpservice.service';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  token:any;
  header:any;

  constructor(private httpService:HttpserviceService) { 
    this.header={
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    }
  }

  userRegister(data:any){ 
    return this.httpService.postData('bookstore_user/registration', data, false, this.header)
  }

  userLogin(data:any){
    return this.httpService.postData('bookstore_user/login', data, false, this.header)
  }

  adminRegister(data:any){
    return this.httpService.postData('bookstore_user/admin/registration', data, false, this.header)
  }

  adminLogin(data:any){
    return this.httpService.postData('bookstore_user/admin/login', data, false, this.header)
  }
}
