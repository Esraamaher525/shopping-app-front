import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnterProductComponent } from './pages/admin/enter-product/enter-product.component';
import { HomeComponent } from './pages/home/home.component';
import { ShowProductsComponent } from './pages/show-products/show-products.component';
import { EditProfileComponent } from './users/edit-profile/edit-profile.component';
import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';
import {EnterPromoCodeComponent} from './pages/admin/enter-promo-code/enter-promo-code.component';
import { CartComponent } from './pages/cart/cart.component';
const routes: Routes = [
  {path:'',redirectTo:"home",pathMatch:"full"},
  {path:'home',children:[
    {path:'',component:HomeComponent},
    {path:':category',component:ShowProductsComponent},
    {path:'cart',component:CartComponent}
  ]},
  {path:"user",children:[
    {path:"login",component:LoginComponent},
    {path:"register",component:RegisterComponent},
    {path:"profile",component:EditProfileComponent}
  ]},
  {path:"admin",children:[
    {path:"enter-product",component:EnterProductComponent},
    {path:"enter-promo-code",component:EnterPromoCodeComponent},

  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
