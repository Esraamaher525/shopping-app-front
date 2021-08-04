import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  products;
  constructor(private _Products:ProductsService) { 
    debugger
    this.products=_Products.getSelectedProduct();
    console.log(this.products)
  }
  ngOnInit(): void {
    debugger
  }

}
