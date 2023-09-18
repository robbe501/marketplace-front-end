import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-post-product',
  templateUrl: './post-product.component.html',
  styleUrls: ['./post-product.component.css']
})
export class PostProductComponent {

  image?: File;

  imageId: number = -1;

  constructor(private productService: ProductService, private cookies: CookieService, private router: Router) {}

  uploadImage(){

  }

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      this.image = file;
    }
  }

  postProduct(name: string, material: string, description: string, price: string) {
    this.productService.uploadImage({
      image: this.image!
    }).subscribe((image) => {
      this.productService.postProduct({
        nome: name,
        materiale: material,
        descrizione: description,
        prezzo: parseFloat(price),
        utenteId: parseInt(this.cookies.get('userId')),
        imageId: image.imageId
      }).subscribe(() => this.router.navigate(['mieiProdotti']));
    });
  }
}
