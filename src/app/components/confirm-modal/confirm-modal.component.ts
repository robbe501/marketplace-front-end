import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.css']
})
export class ConfirmModalComponent {

  @Input()
  id: number = 0;

  @Output()
  closeModal = new EventEmitter<boolean>()

  constructor(private productService: ProductService) {

  }

  closeModalEmitter() {
    this.closeModal.emit(true);
  }

  closeModalFromBg(event: any) {
    if(<HTMLDivElement>event.target.innerHTML.includes("modal-bg")) {
      this.closeModalEmitter();
    }
  }

  onDelete() {
    this.productService.deleteProduct(this.id).subscribe(() => {
      this.closeModalEmitter();
      this.productService.emitRefresh();
    });
  }

}
