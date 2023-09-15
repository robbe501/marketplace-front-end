import { Component, Input } from '@angular/core';
import { endpoint } from 'src/app/config/endpoint.config';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.css']
})
export class CartProductComponent {

  @Input()
  id: number = 0;

  @Input()
  name: string = "";

  @Input()
  material: string = "";

  @Input()
  description: string = "";

  @Input()
  price: number = 0;

  @Input()
  imageId: number = 0;

  quantity:number = 1;

  constructor(private cartService: CartService) {

  }

  getImage() {
    if(this.imageId == 0 || this.imageId == undefined || this.imageId == null ) {
      return "https://as1.ftcdn.net/v2/jpg/02/99/61/74/1000_F_299617487_fPJ8v9Onthhzwnp4ftILrtSGKs1JCrbh.jpg";
    }
    else
      return endpoint + "getImage/" + this.imageId;
  }

  removeProduct() {


    this.cartService.emitRemove(this.id);
  }

}
