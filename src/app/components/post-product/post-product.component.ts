import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-post-product',
  templateUrl: './post-product.component.html',
  styleUrls: ['./post-product.component.css']
})
export class PostProductComponent {

  image?: File;

  imageId: number = -1;

  constructor(private productService: ProductService) {}

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
        // TODO
        utenteId: 1,
        imageId: image.imageId
      }).subscribe();
    });
  }
}
