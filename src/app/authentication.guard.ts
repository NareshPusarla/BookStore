import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthserviceService } from './service/authentication/authservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceGuard implements CanActivate {
  
  constructor(private authService:AuthserviceService, private router:Router){}
  canActivate(): boolean{
    if(!this.authService.getToken()){
      this.router.navigateByUrl("/login");
    }
    return this.authService.getToken();
  }
  
}
