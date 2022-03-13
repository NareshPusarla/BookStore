import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/service/dataservice/data-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private dataService:DataServiceService, private router:Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigateByUrl("/login");
    console.log("Logout successfull");
    this.snackBar.open("successfully logged out", "dismiss", {duration:3000});
  }
}
