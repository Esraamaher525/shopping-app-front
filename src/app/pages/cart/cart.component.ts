import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import {FormControl, FormGroup} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  products;
  promoCode;
  promocodeInvalid;
  enterPromoCodeF=new FormGroup({
    promoCode:new FormControl(''),
  })
  constructor(private _Products:ProductsService,private toastr: ToastrService,private router:Router) { }
  ngOnInit(): void {
    this.products=this._Products.getSelectedProduct();
    console.log(this.products)
  }
  enterPromoCode(){
    debugger
    this.promocodeInvalid=""
    let promo=this.enterPromoCodeF.value.promoCode
    this._Products.testPromoCode(promo).subscribe(res=>{
      console.log(res)
    },err=>{
      this.promocodeInvalid=err?.error?.message
    }) 
  }
  checkout(){
    let dataOfProduct={
      products:this.products,
      totalPrice:30000
    }
    this._Products.checkOut(dataOfProduct).subscribe(res=>{
      console.log(res)
      this.toastr.success('success', 'success');
    },()=>{
    },()=>{
      debugger
      this._Products.setSelectedProduct([]);
      this._Products.changeCount(0)
      this._Products.changeTotalPrice(0)
      this.router.navigate(['/home'])
    })
  }

}
