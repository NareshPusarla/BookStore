import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BookserviceService } from 'src/app/service/bookservice/bookservice.service';

@Component({
  selector: 'app-quickview',
  templateUrl: './quickview.component.html',
  styleUrls: ['./quickview.component.css']
})
export class QuickviewComponent implements OnInit {

  cartQuantity:number = 1;
  showButton:boolean = false;
  showBag:boolean = true;
  bookId:any;
  bookInfo:any;

  constructor( private bookservice:BookserviceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getBookDetail();
    this.bookId = this.route.snapshot.params['id'];
  }

  getBookDetail(){
    this.bookservice.getBooks().subscribe((res:any)=>{ 
      res.result.forEach((element:any) => {
        if(element._id == this.bookId){
          this.bookInfo = element;
          console.log("boofInfo", this.bookInfo);
        }  
      });
    }, error=>{
      console.log(error); 
    })
  }

  addToBag(){
    this.showButton = true;
    this.showBag = false;
    this.bookservice.addCartItem(this.bookId).subscribe((res:any)=>{
      console.log("book id for cart", res);
    }, error=>{
      console.log(error);
    })
  }

  addToWishlist(){
    this.bookservice.addWishList(this.bookId).subscribe((res:any)=>{
      console.log("book id for wishlist", res);  
    }, error=>{
      console.log(error);
    })
  }

  minus(){
    if(this.cartQuantity != 1){
      this.cartQuantity--;
      let data = {
        "quantityToBuy": this.cartQuantity
      }
      this.bookservice.cartItemQuantity(this.bookInfo._id, data).subscribe((res:any)=>{
        console.log("adding to cart of this bookId", this.cartQuantity);
      }, error=>{
        console.log(error);
      })
    }
    else{
      this.showButton = false;
      this.showBag = true;
    }
  }

  plus(){
    if(this.cartQuantity){
      this.cartQuantity++;
      let data = {
        "quantityToBuy": this.cartQuantity
      }
      this.bookservice.cartItemQuantity(this.bookInfo._id, data).subscribe((res:any)=>{
        console.log("adding to cart of this bookId", this.cartQuantity);
      }, error=>{
        console.log(error);
      })
    }
  }

}
