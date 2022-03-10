import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsBoughtComponent } from './products-bought/products-bought.component';
import { ProductsPaymentComponent } from './products-payment/products-payment.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterAdminComponent } from './register-admin/register-admin.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [

  { path:'products', component: HomeComponent},
  { path : 'products/:id',component:ProductDetailComponent},
  { path : 'Authentication/register',component:RegisterComponent},
  { path : 'Authentication/login',component:LoginComponent},
  { path : 'Authentication/registerAdmin',component:RegisterAdminComponent},
  { path : 'customers',component:UserComponent},
  { path : 'receipt',component:ProductsBoughtComponent},
  { path : 'add', component:AddProductComponent},
  { path:'buy',component:ProductsPaymentComponent},
  { path: 'edit', component:EditProductComponent},
  {path:'payment/:id',component:ProductsPaymentComponent},
  {path:'profile',component:ProfileComponent}


 // {path:'payment',component:ProductsPaymentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
