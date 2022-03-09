import { Component, OnInit } from '@angular/core';
import { BookserviceService } from 'src/app/service/bookservice/bookservice.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  wishListData:any;
  bookId:any;
  constructor(private bookService:BookserviceService) { }

  ngOnInit(): void {
    this.getWishlistItems();
  }

  getWishlistItems(){
    this.bookService.getWishlistItem().subscribe((res:any)=>{
      console.log("book res", res);
      this.wishListData = res;
    }, error=>{
      console.log(error); 
    })
  }

  removeItem(){
    this.bookService.removeItemWishlist(this.bookId).subscribe((res:any)=>{
      console.log("book res", res);
    }, error=>{
      console.log(error); 
    })
  }
}
