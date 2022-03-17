import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookserviceService } from 'src/app/service/bookservice/bookservice.service';
import { DataServiceService } from 'src/app/service/dataservice/data-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  target: any;
  badgeCount:any;

  constructor(private dataService:DataServiceService, private bookService:BookserviceService, private router:Router) { }

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () =>{
      return false;
    }
    this.dataService.share.subscribe(x => this.badgeCount =x);
  }

  updateText(filteredString: any){
    console.log("hi this is string msg", filteredString.target.value);
    this.dataService.updateData(filteredString.target.value);
  }
}
