import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  baseUrl = environment.baseurl;

  constructor(private httpClient:HttpClient) { }

  postData(url:string, reqData:any={}, token:boolean=false, httpoptions:any={}){
    console.log(reqData);
    return this.httpClient.post(this.baseUrl+url, reqData, token && httpoptions)
  }

  getData(url:string, token:boolean=false, httpoptions:any={}){
    return this.httpClient.get(this.baseUrl+url, token && httpoptions)
  }

  putData(url:string, reqData:any={}, token:boolean=false, httpoptions:any={}){
    return this.httpClient.put(this.baseUrl+url, reqData, token && httpoptions)
  }
}
