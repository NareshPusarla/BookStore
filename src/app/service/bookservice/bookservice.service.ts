import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpserviceService } from '../httpservice/httpservice.service';

@Injectable({
  providedIn: 'root'
})
export class BookserviceService {

  token:any;
  header:any;
  constructor(private httpService:HttpserviceService) {
    this.token=localStorage.getItem('token')
    this.header={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'x-access-token': this.token,
      })
    }
  } 

  getBooks(){
    console.log("token === ",this.token);
    return this.httpService.getData('bookstore_user/get/book', true, this.header)
  }

  addCartItem(id:any){
    return this.httpService.postData('bookstore_user/add_cart_item/'+id, {}, true, this.header)
  }

  getCartItem(){
    return this.httpService.getData('bookstore_user/get_cart_items', true, this.header)
  }

  cartItemQuantity(id:any, data:any){
    return this.httpService.putData('bookstore_user/cart_item_quantity/'+id, data, true, this.header)
  }

  removeCartItemQuantity(id:any){
    return this.httpService.deleteData('bookstore_user/remove_cart_item/'+id, {}, true, this.header)
  }

  customerDetails(data:any){
    return this.httpService.putData('bookstore_user/edit_user', data, true, this.header)
  }

  orderCheckout(data:any){
   return this.httpService.postData('bookstore_user/add/order',data, true, this.header ) 
   }

  addWishList(id:any){
    return this.httpService.postData('bookstore_user/add_wish_list/'+id, {}, true, this.header)
  }

  getWishlistItem(){
    return this.httpService.getData('bookstore_user/get_wishlist_items', true, this.header)
  }

  removeItemWishlist(id:any){
    return this.httpService.deleteData('bookstore_user/remove_wishlist_item/'+id, {}, true, this.header)
  }

  addFeedback(id:any, data:any){
    return this.httpService.postData('bookstore_user/add/feedback/'+id, data, true, this.header)
  }

  getFeedback(id:any){
    return this.httpService.getData('bookstore_user/get/feedback/'+id, true, this.header)
  }

  addAdminBook(data:any){
    return this.httpService.postData('bookstore_user/admin/add/book', data, true, this.header)
  }

  updateAdminBook(id:any, data:any){
    return this.httpService.putData('bookstore_user/admin/update/book/'+id, data, true, this.header)
  }

  deleteAdminBook(id:any){
    return this.httpService.deleteData('bookstore_user/admin/delete/book/'+id, {}, true, this.header)
  }
}


