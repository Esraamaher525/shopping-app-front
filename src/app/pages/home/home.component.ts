import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ProductsService} from '../../services/products.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private router:Router) {}

  ngOnInit(): void {
  }
  shopNow(){
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.navigate(['/home','all-products'])
  }

}
