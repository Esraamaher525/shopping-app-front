import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {environment} from '../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products=[];
  constructor(private _http:HttpClient) { }
  getAllProduct():Observable<any>{
    return this._http.get(`${environment.commonURL}/product/allproducts`)
  }
  getProductOfCategory(category):Observable<any>{
    return this._http.get(`${environment.commonURL}/product/${category}`)
  }
  //get products has sale
  getProductsHasSale():Observable<any>{
    return this._http.get(`${environment.commonURL}/product/shop-sale`)
  }
  //count of cart
  public subjectCount=new BehaviorSubject(0);
  observableCount=this.subjectCount.asObservable();
  changeCount(value){
    debugger
    this.subjectCount.next(value)
    //(value>=0) ? this.subjectCount.next(value): console.log("no items");
  }
  //total price
  public totalPriceSubject=new BehaviorSubject(0);
  observableTotalPrice=this.totalPriceSubject.asObservable();
  changeTotalPrice(value){
    debugger
    (value>=0) ? this.totalPriceSubject.next(value): console.log("no items");
  }
  // selected product
  setSelectedProduct(product){
    this.products.push(product);
  }
  getSelectedProduct(){
    return this.products;
  }
  //promo code
  testPromoCode(promocode){
    return this._http.get(`${environment.commonURL}/promo-code/${promocode}`)

  }
  //check out
  checkOut(data){
    return this._http.post(`${environment.commonURL}/check-out`,data)
  }

}
