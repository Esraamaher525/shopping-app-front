import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  userBefor:boolean=false;
  submitted:boolean=false;
  register=new FormGroup({
    name:new FormControl("",[Validators.required]),
    password:new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(8)]),
    email:new FormControl("",[Validators.required,Validators.email]),
    birthDate:new FormControl("",[Validators.required]),
    isAdmin:new FormControl("",[Validators.required]),
    phone:new FormControl("",[Validators.minLength(11)]),
  })
  constructor(private _user:UserService,private router: Router ) { }

  ngOnInit(): void {}
  get f() { return this.register.controls; }
  submit(){
    this.submitted=true;
    if (this.register.invalid) return;
    this._user.register(this.register.value).subscribe((res)=>{
    },(err)=>{
      err.error?.data?.keyPattern?.email ? this.userBefor=true: this.userBefor=false;
    },()=>{
      console.log("success")
    })
  }
  navigateToLogin(){
    this.router.navigate(['/users/login']);
  }

}
