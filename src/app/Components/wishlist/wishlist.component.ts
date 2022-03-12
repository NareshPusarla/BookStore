import { Component, OnInit } from '@angular/core';
import { BookserviceService } from 'src/app/service/bookservice/bookservice.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  wishListData:any;
  wishListCount:any;
  bookId:any;
  constructor(private bookService:BookserviceService) { }

  ngOnInit(): void {
    this.getWishlistItems();
  }

  getWishlistItems(){
    this.bookService.getWishlistItem().subscribe((res:any)=>{
      console.log("book res", res);
      this.wishListData = res.result;
      this.wishListCount = res.result.length;
    }, error=>{
      console.log(error); 
    })
  }

  removeWishListItem(book:any){
    this.bookService.removeItemWishlist(book.product_id._id).subscribe((res:any)=>{
      console.log("removed the item from wishlist", res);
    }, error=>{
      console.log(error); 
    })
    this.getWishlistItems();
    location.reload();
  }
}
