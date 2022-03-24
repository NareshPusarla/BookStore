import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BookserviceService } from 'src/app/service/bookservice/bookservice.service';

@Component({
  selector: 'app-admin-book-update',
  templateUrl: './admin-book-update.component.html',
  styleUrls: ['./admin-book-update.component.css']
})
export class AdminBookUpdateComponent implements OnInit {

  bookName:any;
  author:any
  description:any;
  quantity:any
  price:any;
  discountPrice:any;
  
  showUpdate:boolean = true;
  showAdd:boolean = false;

  constructor(private bookService:BookserviceService, public dialogRef: MatDialogRef<AdminBookUpdateComponent>, 
    @Inject(MAT_DIALOG_DATA) public book: any, private snackBar: MatSnackBar) { 
   
  }

  ngOnInit(): void {
    this.bookName = this.book.bookName;
    this.description = this.book.description;
    this.author = this.book.author;
    this.quantity = this.book.quantity;
    this.price = this.book.price;
    this.discountPrice = this.book.discountPrice;

    console.log("hi this is notes", this.book);
    
    this.showUpdate = this.book.action;
    // console.log("action", this.book.action, this.showUpdate);
    
    this.showAdd = this.book.action;
    // console.log("action", this.book.action, this.showAdd);
  }

  bookAction(){
    let data = {
      bookName: this.bookName,
      author: this.author,
      description: this.description,
      quantity: this.quantity,
      price: this.price,
      discountPrice: this.discountPrice,
    }

    if(this.book.action){
      console.log("action", this.book.action);
      this.bookService.addAdminBook(data).subscribe((response:any)=>{
        console.log("notes added", response);
        this.snackBar.open("notes added successfully", "dismiss", {duration:3000});
        window.location.reload();
      }, error => {
        console.log(error);
      })
      this.dialogRef.close();

    } else{
      console.log("id", this.book._id);
      this.bookService.updateAdminBook(this.book._id, data).subscribe((response:any)=>{
        console.log("updated notes", response);
        this.snackBar.open("notes updated successfully", "dismiss", {duration:3000});
        window.location.reload();
      }, error => {
        console.log(error);
      })
      this.dialogRef.close();
    }
  }

}
