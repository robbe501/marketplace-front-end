import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PostProductComponent } from './components/post-product/post-product.component';
import { ProductsComponent } from './components/products/products.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserProductsComponent } from './components/user-products/user-products.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'prodotti', component: ProductsComponent },
  { path: 'registrati', component: SignupComponent },
  { path: 'accedi', component: LoginComponent },
  { path: 'carrello', component: CartComponent },
  { path: 'inserisciProdotto', component: PostProductComponent, canActivate: [AuthGuard]  },
  { path: 'mieiProdotti', component: UserProductsComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
