import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
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
