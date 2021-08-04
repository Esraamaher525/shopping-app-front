import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-nav-bar-category',
  templateUrl: './nav-bar-category.component.html',
  styleUrls: ['./nav-bar-category.component.scss']
})
export class NavBarCategoryComponent implements OnInit {
  categories:Array<string>;
  Auth:boolean=true;
  count:number;
  totalPrice:number;
  constructor(private _Products:ProductsService,private router:Router,private _userService:UserService) {
    _Products.getAllProduct().subscribe(res=>{
      this.categories=[];
      res.data.forEach((el,i) => {
        let categoryData=res.data[i].category
        if(!this.categories.includes(categoryData) && categoryData !=undefined ) this.categories.push(categoryData)
      });
    })
   }
   navigate(category){
     this.router.routeReuseStrategy.shouldReuseRoute = () => false;
     this.router.navigate(['/home',category])
   }
  ngOnInit(): void {
    this.Auth=this._userService.getLoginFlag();
    //get count of items
    this._Products.observableCount.subscribe(count=>{
      this.count=count;
    })
    //get total price
    this._Products.observableTotalPrice.subscribe(total=>{
      this.totalPrice=total;
    })
  }

}
