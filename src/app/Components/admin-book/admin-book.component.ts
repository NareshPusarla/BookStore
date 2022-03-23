import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BookserviceService } from 'src/app/service/bookservice/bookservice.service';
import { AdminBookUpdateComponent } from '../admin-book-update/admin-book-update.component';

@Component({
  selector: 'app-admin-book',
  templateUrl: './admin-book.component.html',
  styleUrls: ['./admin-book.component.css']
})
export class AdminBookComponent implements OnInit {

  bookName:any;
  author:any
  description:any;
  quantity:any
  price:any;
  discountPrice:any;

  allBooks:any;

  constructor(private bookservice:BookserviceService, private router:Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(){
    this.bookservice.getBooks().subscribe((res:any)=>{
      console.log("hi res",res);
      this.allBooks=res.result;
      console.log("books list",this.allBooks);
      
    }, error=>{
      console.log(error); 
    })
  }

  addBook(){
    const dialogRef = this.dialog.open(AdminBookUpdateComponent, {
      width: '500px',
      data: {action:true},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.bookName = result;
      this.bookName = result;
      this.description = result;
      this.quantity = result;
      this.price = result;
      this.discountPrice = result;
    });
  }

  openDialog(dataNotes:any): void {
    console.log("updated notes", dataNotes);
    const dialogRef = this.dialog.open(AdminBookUpdateComponent, {
      width: '500px',
      data:dataNotes,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.bookName = result;
      this.bookName = result;
      this.description = result;
      this.quantity = result;
      this.price = result;
      this.discountPrice = result;
    });
  }

  deleteBook(book:any){
    this.bookservice.deleteAdminBook(book._id).subscribe((res)=>{
      console.log("book deleted", res);
      window.location.reload();
    })
  }
}
