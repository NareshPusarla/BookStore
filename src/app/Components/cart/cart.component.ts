import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BookserviceService } from 'src/app/service/bookservice/bookservice.service';
import { DataServiceService } from 'src/app/service/dataservice/data-service.service';
import { UserserviceService } from 'src/app/service/userservice/userservice.service';

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

  customerForm!:FormGroup;
  submitted = false;

  constructor(private bookService:BookserviceService, private userService:UserserviceService, private formbuilder: FormBuilder, private snackBar: MatSnackBar, private dataService:DataServiceService, private route:Router) { }

  ngOnInit(): void {
    this.getItems();
    this.customerForm = this.formbuilder.group({
      fullName: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
    })
    this.route.routeReuseStrategy.shouldReuseRoute = () =>{
      return false;
    }
  }

  getItems(){
    this.bookService.getCartItem().subscribe((res:any)=>{ 
      console.log(res);
      this.cartBookData = res.result;
      this.cartCount = res.result.length;
      console.log("cart book data", this.cartBookData);
      
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
      this.bookService.cartItemQuantity(book.product_id?._id, data).subscribe((res:any)=>{
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
      this.bookService.cartItemQuantity(book.product_id?._id, data).subscribe((res:any)=>{
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

    this.getItems();
    location.reload();
  }

  showDetails(){
    if(this.showCustomerDetails == false){
      this.showCustomerDetails = true
      this.address = false;
    }
    this.show = false;
  }

  onSubmit(){
    this.submitted = true;
    if (this.customerForm.valid) {
        console.log("valid data", this.customerForm.value);
        let data={
          addressType: "Home",
          fullAddress: this.customerForm.value.address,
          city: this.customerForm.value.city,
          state: this.customerForm.value.state
        }
        this.bookService.customerDetails(data).subscribe((response:any)=>{
          console.log(response);
          this.snackBar.open('address details saved','dismiss', {duration:3000});
        }, (error: any) =>{
          console.log(error);
        })
    } else {
      console.log("Fill the address details");
    }
  }

  showOrderDetails(){
    if(this.showSummeryDetails == false && this.customerForm.valid){
      this.showSummeryDetails = true
      this.summery = false;
    }
    this.continue= false
  }

  ordersummary() {
    if(this.cartCount >= 1){
      this.cartBookData.forEach((element: any) => { 
        console.log(element);
      });
      let data = {
        "orders": [
          {
            "product_id": "5f60c89223809243e2528781",
            "product_name": "Xyzabc",
            "product_quantity": 10,
            "product_price": 1000
          }
        ]
      }
      this.bookService.orderCheckout(data).subscribe((response: any) => {
        console.log(response);
      })
      this.route.navigateByUrl("/dashboard/order")
    }
  }
}
