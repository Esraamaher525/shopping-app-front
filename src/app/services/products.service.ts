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
    (value>0) ? this.subjectCount.next(value): console.log("no items");
  }
  //total price
  public totalPriceSubject=new BehaviorSubject(0);
  observableTotalPrice=this.totalPriceSubject.asObservable();
  changeTotalPrice(value){
    (value>0) ? this.totalPriceSubject.next(value): console.log("no items");
  }
  // selected product
  setSelectedProduct(product){
    debugger
    this.products.push(product);
  }
  getSelectedProduct(){
    debugger
    return this.products;
  }
}
