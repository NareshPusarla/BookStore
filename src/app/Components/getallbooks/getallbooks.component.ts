import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookserviceService } from 'src/app/service/bookservice/bookservice.service';
import { DataServiceService } from 'src/app/service/dataservice/data-service.service';

@Component({
  selector: 'app-getallbooks',
  templateUrl: './getallbooks.component.html',
  styleUrls: ['./getallbooks.component.css']
})
export class GetallbooksComponent implements OnInit {

  allBooks:any[]=[];
  numberOfBooks:any;

  filteredString = "";
  page:number = 1;
  
  constructor(private bookservice:BookserviceService, private router:Router, private dataService:DataServiceService) { }

  ngOnInit(): void {
    this.getNotes();
    this.dataService.share.subscribe(x => this.filteredString = x);
  }

  getNotes(){
    this.bookservice.getBooks().subscribe((res:any)=>{
      console.log("hi res",res);
      this.allBooks=res.result;
      console.log("books list",this.allBooks);
      console.log("length of books", this.numberOfBooks = this.allBooks.length);
      
    }, error=>{
      console.log(error); 
    })
  }

  quickview(book:any){
    console.log("book id", book._id);
    
    localStorage.setItem('bookId', book._id);
    this.router.navigateByUrl('dashboard/view/' + book._id)

  }

  low(){
    this.allBooks = this.allBooks.sort((low:any, high:any) => low.discountPrice-high.discountPrice);
  }

  high(){
    this.allBooks = this.allBooks.sort((low:any, high:any) => high.discountPrice-low.discountPrice);
  }

}
