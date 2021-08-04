import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private _http:HttpClient) { }
  enterProduct(productData):Observable<any>{
    return this._http.post(`${environment.commonURL}/product/enter-product`,productData)
  }

  enterPromoCode(promoCodeData):Observable<any>{
    return this._http.post(`${environment.commonURL}/promo-code/enter-promo-code`,promoCodeData)
  }
  //get colors
  public getJSON(): Observable<any> {
    return this._http.get("../../assets/json/colors-data.json");
  }

}
