import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpserviceService } from '../httpservice/httpservice.service';

@Injectable({
  providedIn: 'root'
})
export class BookserviceService {

  token:any;
  constructor(private httpService:HttpserviceService) {
    this.token=localStorage.getItem('token')
  } 

  getBooks(){
    console.log("token === ",this.token);
    
    let header={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'x-access-token': this.token,
      })

    }
    return this.httpService.getData('bookstore_user/get/book', true, header)
  }

  addCartItem(id:any){
    console.log("token === ",this.token);
    let header={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'x-access-token': this.token,
      })
    }
    return this.httpService.postData('bookstore_user/add_cart_item/'+id, {}, true, header)
  }

  getCartItem(){
    let header={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'x-access-token': this.token,
      })

    }
    return this.httpService.getData('bookstore_user/get_cart_items', true, header)
  }

  cartItemQuantity(id:any, data:any){
    let header={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'x-access-token': this.token,
      })

    }
    return this.httpService.putData('bookstore_user/cart_item_quantity/'+id, data, true, header)
  }

  removeCartItemQuantity(id:any){
    let header={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'x-access-token': this.token,
      })

    }
    return this.httpService.deleteData('bookstore_user/remove_cart_item/'+id, {}, true, header)
  }

  addWishList(id:any){
    let header={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'x-access-token': this.token,
      })
    }
    return this.httpService.postData('bookstore_user/add_wish_list/'+id, {}, true, header)
  }

  getWishlistItem(){
    let header={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'x-access-token': this.token,
      })

    }
    return this.httpService.getData('bookstore_user/get_wishlist_items', true, header)
  }

  removeItemWishlist(id:any){
    let header={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'x-access-token': this.token,
      })

    }
    return this.httpService.deleteData('bookstore_user/remove_wishlist_item/'+id, {}, true, header)
  }
}
