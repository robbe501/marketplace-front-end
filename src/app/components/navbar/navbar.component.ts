import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { distinctUntilChanged } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  cartNumber: number = 0;

  constructor(private cartService: CartService, private cookies: CookieService, private authService: AuthService) {

  }

  ngOnInit() {
    this.cartNumber = JSON.parse(this.cookies.get('cart') || '[]').length
    this.cartService.$addProduct.pipe(distinctUntilChanged()).subscribe(() => this.cartNumber++)
    this.cartService.$removeProduct.pipe(distinctUntilChanged()).subscribe(() => this.cartNumber--)
  }

  isAuthenticated(): boolean {
    return this.authService.isAuthenticated()
  }

  logout() {
    this.authService.logout();
  }
}
