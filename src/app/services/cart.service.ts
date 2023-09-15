import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private removeProduct: Subject<number> = new Subject<number>();
  private addProduct: Subject<number> = new Subject<number>();

  constructor() { }

  public emitRemove(productId: number): void {
    this.removeProduct.next(productId);
  }

  public emitAdd(productId: number): void {
    this.addProduct.next(productId);
  }

  public get $addProduct(): Observable<number> {
    return this.addProduct.asObservable();
  }

  public get $removeProduct(): Observable<number> {
    return this.removeProduct.asObservable();
  }
}
