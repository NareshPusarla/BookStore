import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/service/dataservice/data-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  target: any;

  constructor(private dataService:DataServiceService) { }

  ngOnInit(): void {
  }

  updateText(filteredString: any){
    console.log("hi this is string msg", filteredString.target.value);
    this.dataService.updateData(filteredString.target.value);
  }

}
