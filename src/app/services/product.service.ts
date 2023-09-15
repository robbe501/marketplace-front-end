import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable, Subject } from 'rxjs';
import { endpoint } from '../config/endpoint.config';
import { ImageReq } from '../models/immagine';
import { PostProdottoReq, Prodotto, PutProdottoReq } from '../models/prodotto';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  refresh: Subject<boolean> = new Subject<boolean>();

  constructor(private http: HttpClient, private cookies: CookieService) { }

  public getProductsFiltered(name: string) {
    return this.http.get<Prodotto[]>(endpoint + "getProdottiByNome/" + name);
  }

  public getProducts() {
    return this.http.get<Prodotto[]>(endpoint + "getProdotto");
  }

  public getProductsWithOffsetAndLimit(offset: number, limit: number) {
    let params = new HttpParams().set("offset", offset).set("limit", limit);
    return this.http.get<Prodotto[]>(endpoint + "getProdottiByOffsetAndLimit",{ params: params});
  }

  publish(data: any): Observable<any> {
    return this.http.post(endpoint + "postProdotto", data);
  }

  uploadImage(image: ImageReq): Observable<any> {
    const formData = new FormData();
    formData.append('image', image.image);

    return this.http.post(endpoint + "uploadImage", formData);
  }

  postProduct(product: PostProdottoReq) {
    return this.http.post(endpoint + "postProdotto", product);
  }

  putProduct(product: PutProdottoReq) {
    return this.http.patch(endpoint + "patchProdotto", product);
  }

  getCartProducts() {
    let params = new HttpParams().set('prodottiCarrello', JSON.parse(this.cookies.get('cart') || '[]'))
    return this.http.get<Prodotto[]>(endpoint + "getProdottiById", { params: params})
  }

  getUserProducts() {
    return this.http.get<Prodotto[]>(endpoint + "getProdottiInVendita/" + this.cookies.get('userId'))
  }

  deleteProduct(id: number) {
    return this.http.delete<Prodotto[]>(endpoint + "deleteProdotto/" + id)
  }

  get $refresh() {
    return this.refresh as Observable<boolean>;
  }

  emitRefresh() {
    this.refresh.next(true);
  }
}

