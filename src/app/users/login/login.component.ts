import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {UserService} from '../../services/user.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  submitted:boolean=false;
  invalid:string="";
  loginUser=new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required])
  })
  constructor(private _user:UserService) { }
  get f() { return this.loginUser.controls; }
  submit(){
    this.submitted = true;
    this.invalid="";
    if (this.loginUser.invalid) return;
    this._user.login(this.loginUser.value).subscribe((res)=>{
      console.log(res)
      localStorage.setItem('token',res.data.token)
    },(err)=>{
      this.invalid=err.error.data
    })
  }
  ngOnInit(): void {}

}
