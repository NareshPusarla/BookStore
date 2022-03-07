import { Component, OnInit } from '@angular/core';
import { BookserviceService } from 'src/app/service/bookservice/bookservice.service';

@Component({
  selector: 'app-quickview',
  templateUrl: './quickview.component.html',
  styleUrls: ['./quickview.component.css']
})
export class QuickviewComponent implements OnInit {

  constructor( private bookservice:BookserviceService) { }

  ngOnInit(): void { }

}
