import { Component, Input, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { endpoint } from 'src/app/config/endpoint.config';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{

  @Input()
  id: number = 0;

  @Input()
  price: number = 0;

  @Input()
  name: string = "";

  @Input()
  material: string = "";

  @Input()
  description: string = "";

  @Input()
  imageId: number = 0;

  addedToCart: boolean = false;

  constructor(private cookies: CookieService, private cartService: CartService) {

  }

  ngOnInit() {
    let cart = JSON.parse(this.cookies.get('cart'));
    if (cart.includes(this.id))
      this.addedToCart = true;
  }

  getImage() {
    return endpoint + "getImage/" + this.imageId;
  }

  addToCart() {
    var cart = JSON.parse(this.cookies.get('cart') || '[]');
    cart.push(this.id);
    this.cookies.set('cart', JSON.stringify(cart));
    this.addedToCart = true;
    console.log(this.cookies.get('cart'))
    this.cartService.emitAdd(this.id);
  }

  removeFromCart() {
    var cart = JSON.parse(this.cookies.get('cart') || '[]');
    const index = cart.indexOf(this.id);
    const x = cart.splice(index, 1);
    this.cookies.set('cart', JSON.stringify(cart));
    this.addedToCart = false;
    console.log(this.cookies.get('cart'))
    this.cartService.emitRemove(this.id);
  }
}
