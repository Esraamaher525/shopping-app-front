import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable()
export class UserInterceptor implements HttpInterceptor {
  constructor(private _userService:UserService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    debugger
    let token=localStorage.getItem('token')
    if(token){
      this._userService.loginFlag=true
      request=request.clone({
        headers:request.headers.set('Authorization',`Bearer ${token}`)
      })
    }
    return next.handle(request);
  }
}
