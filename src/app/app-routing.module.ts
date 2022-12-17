import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaleconPageComponent } from './calecon-page/calecon-page.component';
import { PantalonComponent } from './page/pantalon/pantalon.component';
import { AboutComponent } from './pages/about/about.component';
import { CaleconComponent } from './pages/calecon/calecon.component';
import { CartComponent } from './pages/cart/cart.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { MenupagesComponent } from './pages/menupages/menupages.component';
import { ProductsComponent } from './pages/products/products.component';
import { PantalonPageComponent } from './pantalon-page/pantalon-page.component';
import { BraidsComponent } from './users/braids/braids.component';
import { LoginComponent } from './users/login/login.component';
import { SignupComponent } from './users/signup/signup.component';

const routes: Routes = [
  {path: "", component:HomeComponent},
  {path: "menu", component:MenuComponent},
  {path: "about", component:AboutComponent},
  {path: "signup", component:SignupComponent},
  {path: "login", component:LoginComponent},
  {path: "product", component:ProductsComponent},
  {path: "contact", component:ContactComponent},
  {path: "calecon", component:CaleconComponent},
  {path: "pantalon", component:PantalonComponent},
  {path: "cart", component:CartComponent},
  {path:"menu/:id", component:MenupagesComponent},
  {path:"calecon/:id", component:CaleconPageComponent},
  {path:"pantalon/:id", component:PantalonPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
