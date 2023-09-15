import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { distinctUntilChanged } from 'rxjs';
import { Prodotto } from 'src/app/models/prodotto';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  partialTotal = 0;
  shipping = 4.99;
  total = 0;

  cartProducts: Prodotto[] = [];



  constructor(private productService: ProductService, private cartService: CartService, private cookies: CookieService) {

  }

  ngOnInit() {
    this.productService.getCartProducts().subscribe((data: Prodotto[]) => {
      this.cartProducts = data;
      this.calculateTotal();
    });

    let sub = this.cartService.$removeProduct.pipe(distinctUntilChanged()).subscribe((productId: number) => {
      this.cartProducts = this.cartProducts.filter(product => product.prodottoId != productId)
      this.removeFromCart(productId)
      this.calculateTotal();
    });

  }


  calculateTotal() {
    this.partialTotal = 0;
    this.cartProducts.forEach((product: Prodotto) => {
      this.partialTotal += (product.prezzo);
    });
    this.total = this.partialTotal + this.shipping
  }

  removeFromCart(id: number) {
    var cart = JSON.parse(this.cookies.get('cart') || '[]');
    const index = cart.indexOf(id);
    if(index !== -1) {
      const x = cart.splice(index, 1);
      this.cookies.set('cart', JSON.stringify(cart));
      console.log(this.cookies.get('cart'))
    }
  }
}
