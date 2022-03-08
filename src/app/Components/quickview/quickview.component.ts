import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BookserviceService } from 'src/app/service/bookservice/bookservice.service';

@Component({
  selector: 'app-quickview',
  templateUrl: './quickview.component.html',
  styleUrls: ['./quickview.component.css']
})
export class QuickviewComponent implements OnInit {

  quantity:number = 1;
  showButton:boolean = false;
  showBag:boolean = true;
  bookId:any;
  bookInfo:any;

  constructor( private bookservice:BookserviceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getBookDetail();
    this.bookId = this.route.snapshot.params['id'];
    console.log("id is", this.bookId);
    
  }

  addToBag(){
    this.showButton = true;
    this.showBag = false;
  }

  minus(){
    if(this.quantity != 1){
      this.quantity--;
    }
    else{
      this.showButton = false;
      this.showBag = true;
    }
  }

  plus(){
    if(this.quantity){
      this.quantity++;
    }
  }

  getBookDetail(){
    this.bookservice.getBooks().subscribe((res:any)=>{
      
      res.result.forEach((element:any) => {
        if(element._id == this.bookId){
          this.bookInfo = element;
        }
        
      });
    }, error=>{
      console.log(error); 
    })
  }
}
