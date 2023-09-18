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
    let cart = JSON.parse(this.cookies.get('cart') || '[]');
    if (cart.includes(this.id))
      this.addedToCart = true;
  }

  getImage() {
    if(this.imageId == 0 || this.imageId == undefined || this.imageId == null )
      return "https://as1.ftcdn.net/v2/jpg/02/99/61/74/1000_F_299617487_fPJ8v9Onthhzwnp4ftILrtSGKs1JCrbh.jpg";
    else
      return endpoint + "getImage/" + this.imageId;
  }
  addToCart() {
    var cart = JSON.parse(this.cookies.get('cart') || '[]');
    cart.push(this.id);
    this.cookies.set('cart', JSON.stringify(cart));
    this.addedToCart = true;
    this.cartService.emitAdd(this.id);
  }

  removeFromCart() {
    var cart = JSON.parse(this.cookies.get('cart') || '[]');
    const index = cart.indexOf(this.id);
    const x = cart.splice(index, 1);
    this.cookies.set('cart', JSON.stringify(cart));
    this.addedToCart = false;
    this.cartService.emitRemove(this.id);
  }
}
