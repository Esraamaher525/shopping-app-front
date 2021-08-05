import { Component, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.scss']
})
export class ShowProductsComponent implements OnInit {
  filterProduct=[];
  count:number=0;
  totalPrice:number=0;
  constructor(private route: ActivatedRoute,private _Products:ProductsService,private router:Router) { }  
  ngOnInit(): void {
    const category = this.route.snapshot.paramMap.get('category');
    if(category=='sale'){
      this. _Products.getProductsHasSale().subscribe(res=>{
        this.filterProduct=res.data;
        this.getCorrectPath()
      })    
    }else if(category=='all-products'){
      this. _Products.getAllProduct().subscribe(res=>{
        console.log(res)
        this.filterProduct=res.data;
        this.getCorrectPath()
      })    
    }  
    else{
      this. _Products.getProductOfCategory(category).subscribe(res=>{
        console.log(res)
        this.filterProduct=res;
        this.getCorrectPath()
      
      })       
    }
    this._Products.observableCount.subscribe(res=>{
      this.count=res;
    })
  }
  getCorrectPath(){
    for(let i =0;i<this.filterProduct.length;i++){
      let products =this.filterProduct[i].products;
      if(products.length){
        for(let i=0;i<products.length;i++){
          let index=products[i].indexOf("assets")            
          products[i]=products[i].replace(products[i].substring(0, index), "");
          console.log(products[i],"test")
        }

      }
    }

  }
  //add to cart
  addCart(product){
    this.count += 1;
    this._Products.changeCount(this.count)
    this.totalPrice += Number(product.priceAfterSale);
    this._Products.changeTotalPrice(this.totalPrice);
    this._Products.setSelectedProduct(product)
   
  }
  ngOnDestroy() {
    this.filterProduct=[]
  }


}
