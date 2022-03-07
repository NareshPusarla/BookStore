import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor() { }

  getToken(){
    return !!localStorage.getItem("token");
  }
}
