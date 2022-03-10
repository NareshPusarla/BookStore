import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookserviceService } from 'src/app/service/bookservice/bookservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartBookData:any;
  cartCount:any
  bookQuantity:any = 1;
  bookId:any;
  show:boolean = true;
  continue:boolean = true;

  showCustomerDetails:boolean = false;
  address:boolean = true;

  showSummeryDetails:boolean = false;
  summery:boolean = true;

  customerForm! : FormGroup;

  constructor(private bookService:BookserviceService, private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getItems();
    this.customerForm = this.formbuilder.group({
      fullName: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
    })
  }

  getItems(){
    this.bookService.getCartItem().subscribe((res:any)=>{ 
      console.log(res);
      this.cartBookData = res.result;
      this.cartCount = res.result.length;
    }, error=>{
      console.log(error); 
    })

  }

  minus(book:any){
    if(this.bookQuantity != 1){
      this.bookQuantity--;
      let data = {
        "quantityToBuy":this.bookQuantity
      }
      this.bookService.cartItemQuantity(book.product_id._id, data).subscribe((res:any)=>{
        console.log("adding to card of this bookId", this.bookQuantity);
      }, error=>{
        console.log(error);
      })
    }
  }

  plus(book:any){
    if(this.bookQuantity){
      this.bookQuantity++;
      let data = {
        "quantityToBuy":this.bookQuantity
      }
      this.bookService.cartItemQuantity(book.product_id._id, data).subscribe((res:any)=>{
        console.log("adding to card of this bookId", this.bookQuantity);
      }, error=>{
        console.log(error);
      })
    }
  }

  removeCartItem(book:any){
    this.bookService.removeCartItemQuantity(book._id).subscribe((res:any)=>{
      console.log("removed the item from cart", res);
    }, error=>{
      console.log(error);
    })

    location.reload();
  }

  showDetails(){
    if(this.showCustomerDetails == false){
      this.showCustomerDetails = true
      this.address = false;
    }
    this.show = false;
  }

  showOrderDetails(){
    if(this.showSummeryDetails == false){
      this.showSummeryDetails = true
      this.summery = false;
    }
    this.continue= false
  }
}
