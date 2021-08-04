import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { EditProfileComponent } from './users/edit-profile/edit-profile.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ShowProductsComponent } from './pages/show-products/show-products.component';
import { NavBarCategoryComponent } from './shared/nav-bar-category/nav-bar-category.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EnterProductComponent } from './pages/admin/enter-product/enter-product.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import {UserInterceptor} from '../app/providers/user.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { EnterPromoCodeComponent } from './pages/admin/enter-promo-code/enter-promo-code.component';
import { CartComponent } from './pages/cart/cart.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    EditProfileComponent,
    HomeComponent,
    FooterComponent,
    ShowProductsComponent,
    NavBarCategoryComponent,
    EnterProductComponent,
    EnterPromoCodeComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    IvyCarouselModule,
    NgbModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(),
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: UserInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
