import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class UserService {
  UrlApi="http://localhost:4100";
  public loginFlag:boolean=false;
  constructor(private _http:HttpClient) { }
  register(registerData):Observable<any>{
    return this._http.post(`${environment.commonURL}/user/register`,registerData)
  }
  login(userData):Observable<any>{
    return this._http.post(`${environment.commonURL}/user/login`,userData)
  }
  getLoginFlag(){
    localStorage.getItem('token')?this.loginFlag=true:this.loginFlag=false;
    return this.loginFlag;
  }
}
