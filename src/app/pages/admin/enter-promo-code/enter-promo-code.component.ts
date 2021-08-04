import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-enter-promo-code',
  templateUrl: './enter-promo-code.component.html',
  styleUrls: ['./enter-promo-code.component.scss']
})
export class EnterPromoCodeComponent implements OnInit {
  submitted:boolean=false;
  dublicatedPromo;
  enterPromoCode=new FormGroup({
    promoCode:new FormControl('',[Validators.required]),
    startDate:new FormControl('',[Validators.required]),
    endDate:new FormControl('',[Validators.required]),
    discountValue:new FormControl('',[Validators.required])
  })
  constructor(private adminService:AdminService,private toastr: ToastrService,private router:Router) { }

  ngOnInit(): void {
  }
  get f() { return this.enterPromoCode.controls; }
  submit(){
    this.submitted = true;
    if (this.enterPromoCode.invalid) return;
    this.adminService.enterPromoCode(this.enterPromoCode.value).subscribe(res=>{
      this.toastr.success(res.message, 'success');
    },(err)=>{
      this.dublicatedPromo=err.error.data.keyPattern.promoCode
    },()=>{
      this.router.navigate(['/home'])
    })

  }

}
