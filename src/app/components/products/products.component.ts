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
  nPerPage = 9;
  current = 0;
  isSearching = false;

  constructor(private productService: ProductService) {
    productService.getProductsWithOffsetAndLimit(this.page*this.nPerPage, this.nPerPage).subscribe((products: Prodotto[]) => {
      this.products = products;
      this.current = products.length;
    })
  }

  find(textToFind: string) {
    if(textToFind != "") {
      this.isSearching = true;
      this.productService.getProductsFiltered(textToFind).subscribe((products: Prodotto[]) => {
        this.products = products;
      })
    }
    else {
      this.isSearching = false;
      this.productService.getProducts().subscribe((products: Prodotto[]) => {
        this.products = products;
        this.current = products.length;
      })
    }
  }

  next() {
    if(this.current == this.nPerPage && !this.isSearching){
      this.page++;
      this.productService.getProductsWithOffsetAndLimit(this.page*this.nPerPage, this.nPerPage).subscribe((products: Prodotto[]) => {
        this.products = products;
        this.current = products.length;
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth',
        });
      })
    }
  }

  prev() {
    if(this.page != 0 && !this.isSearching) {
      this.page--;
      this.productService.getProductsWithOffsetAndLimit(this.page*this.nPerPage, this.nPerPage).subscribe((products: Prodotto[]) => {
        this.products = products;
        this.current = products.length;
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth',
        });
      })
    }
  }

}
