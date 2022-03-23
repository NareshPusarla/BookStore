import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BookserviceService } from 'src/app/service/bookservice/bookservice.service';
import { DataServiceService } from 'src/app/service/dataservice/data-service.service';

@Component({
  selector: 'app-quickview',
  templateUrl: './quickview.component.html',
  styleUrls: ['./quickview.component.css']
})
export class QuickviewComponent implements OnInit {

  cartQuantity:number = 0;
  showButton:boolean = false;
  showBag:boolean = true;
  bookId:any;
  bookInfo:any;

  feedback:any;
  value:any;
  feedbackList:any;

  constructor( private bookservice:BookserviceService, private dataService:DataServiceService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.getBookDetail();
    this.bookId = this.route.snapshot.params['id']; 
    console.log("book id", this.bookId);
    this.getFeedback();
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
    this.cartQuantity++;
    this.sendCartQuantity(this.cartQuantity);
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
    this.cartQuantity--;
    if(this.cartQuantity >= 1){
      this.sendCartQuantity(this.cartQuantity);
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
      this.sendCartQuantity(this.cartQuantity);
      this.showButton = false;
      this.showBag = true;
    }
  }

  plus(){
    if(this.cartQuantity >= 1){
      this.cartQuantity++;
      this.sendCartQuantity(this.cartQuantity);
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

  addFeedback(){
    let data= {
      comment: this.feedback,
      rating: this.value
    }
    this.bookservice.addFeedback(this.bookId, data).subscribe((res:any)=>{
      console.log(res);
    })
    window.location.reload();
  }

  getFeedback(){
    console.log("feedback list",this.bookId);
    this.bookservice.getFeedback(this.bookId).subscribe((res:any)=>{
      console.log("feedback list",res.result);
      this.feedbackList = res.result;
    })
    
  }

  sendCartQuantity(cartQuantity:any){
    this.dataService.sendData(cartQuantity);
  }
}
