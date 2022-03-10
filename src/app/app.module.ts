import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProductsServiceService } from './products-service.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { RegisterAdminComponent } from './register-admin/register-admin.component';
import { AuthInterceptor } from './auth.interceptor';
import { UserComponent } from './user/user.component';
import { ProductsBoughtComponent } from './products-bought/products-bought.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';

import { ProductsPaymentComponent } from './products-payment/products-payment.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { SortPipe } from './pipes/sort.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProductDetailComponent,
    RegisterComponent,
    LoginComponent,
    RegisterAdminComponent,
    UserComponent,
    
    ProductsBoughtComponent,
    AddProductComponent,
    EditProductComponent,
   
    ProductsPaymentComponent,
    ShoppingcartComponent,
    SortPipe,
    FilterPipe,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ProductsServiceService,AuthService, {

    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    //multiple http 
    multi: true,
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
