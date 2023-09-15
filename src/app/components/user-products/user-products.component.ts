import { Component, HostListener, OnInit } from '@angular/core';
import { Prodotto } from 'src/app/models/prodotto';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-user-products',
  templateUrl: './user-products.component.html',
  styleUrls: ['./user-products.component.css']
})
export class UserProductsComponent implements OnInit {

  products: Prodotto[] = [];

  showScrollButton = false;

  constructor(private productService: ProductService) {


  }

  ngOnInit() {
    this.productService.getUserProducts().subscribe((products) => this.products = products)
    this.productService.$refresh.subscribe(() => {
      this.productService.getUserProducts().subscribe((products) => this.products = products)
    })
  }

  refreshProducts() {
    this.productService.getUserProducts().subscribe((products) => this.products = products)
  }

  @HostListener('window:scroll', ['$event'])
  onScrollEvent(event: Event): void {
    this.showScrollButton = window.scrollY > 200;
  }

  scrollToTop(): void {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
}
