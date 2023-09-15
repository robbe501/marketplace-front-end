import { Component, EventEmitter, Input, Output } from '@angular/core';
import { endpoint } from 'src/app/config/endpoint.config';

@Component({
  selector: 'app-user-product',
  templateUrl: './user-product.component.html',
  styleUrls: ['./user-product.component.css']
})
export class UserProductComponent {

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
  refresh = new EventEmitter<boolean>()

  modal: boolean = false;

  confirmModal: boolean = false;

  openModal() {
    this.modal = true;
  }

  closeModal() {
    this.modal = false;
  }

  getImage() {
    if(this.imageId == 0 || this.imageId == undefined || this.imageId == null )
      return "https://as1.ftcdn.net/v2/jpg/02/99/61/74/1000_F_299617487_fPJ8v9Onthhzwnp4ftILrtSGKs1JCrbh.jpg";
    else
      return endpoint + "getImage/" + this.imageId;
  }

  openConfirmModal() {
    this.confirmModal = true;
  }

  closeConfirmModal() {
    this.confirmModal = false;
  }
}
