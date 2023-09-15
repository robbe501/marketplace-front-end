import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css']
})
export class EditModalComponent {
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

  @Output()
  closeModal = new EventEmitter<boolean>()


  constructor(private productService: ProductService) {

  }

  closeModalFromBg(event: any) {
    if(<HTMLDivElement>event.target.innerHTML.includes("modal-bg")) {
      this.closeModalEmitter();
    }
  }

  closeModalEmitter() {
    this.closeModal.emit(true);
  }


  onEdit(name: string, material: string, description: string, price: string) {
    this.productService.putProduct({
      prodottoId: this.id,
      nome: name,
      materiale: material,
      descrizione: description,
      prezzo: parseFloat(price)
    }).subscribe((data) => {
      this.closeModalEmitter();
      this.productService.emitRefresh();
    });
  }

}
