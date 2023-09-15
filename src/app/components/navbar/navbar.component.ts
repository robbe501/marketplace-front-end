import { Component, OnInit } from '@angular/core';
import { distinctUntilChanged } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  cartNumber: number = 0;

  constructor(private cartService: CartService) {

  }

  ngOnInit() {
    this.cartService.$addProduct.pipe(distinctUntilChanged()).subscribe(() => this.cartNumber++)
    this.cartService.$removeProduct.pipe(distinctUntilChanged()).subscribe(() => this.cartNumber--)
  }
}
