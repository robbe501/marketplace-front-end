import { Component } from '@angular/core';
import { Prodotto } from 'src/app/models/prodotto';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products: Prodotto[] = []
  page = 0;
  nPerPage = 6;

  constructor(private productService: ProductService) {
    productService.getProductsWithOffsetAndLimit(this.page*this.nPerPage, this.nPerPage).subscribe((products: Prodotto[]) => {
      this.products = products;
      console.log(products);
    })
  }

  find(textToFind: string) {
    if(textToFind) {
      const sub = this.productService.getProductsFiltered(textToFind).subscribe((products: Prodotto[]) => {
        this.products = products;
      })
    }
    else {
      const sub = this.productService.getProducts().subscribe((products: Prodotto[]) => {
        this.products = products;
        console.log(products);
      })
    }
  }


}
