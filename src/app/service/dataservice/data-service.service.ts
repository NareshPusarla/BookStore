import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private content = new Subject<any>();
  public share = this.content.asObservable();

  private subject = new Subject<any>();
  public share1 = this.subject.asObservable();
  constructor() { }

  updateData(text:any){
    this.content.next(text);
  }

  sendUserDetails(text:any){
    this.subject.next(text);
  }
}
