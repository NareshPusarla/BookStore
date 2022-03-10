import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/service/dataservice/data-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  fullName:any;

  constructor(private dataService:DataServiceService) { }

  ngOnInit(): void {
    this.dataService.share1.subscribe(x => this.fullName = x)
  }

}
