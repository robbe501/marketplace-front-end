import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { endpoint } from '../config/endpoint.config';
import { LoginReq, LoginRes, SignupReq } from '../models/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private cookies: CookieService) { }

  getToken(userData: LoginReq) {
    return this.http.post<LoginRes>(endpoint + "getToken", userData);
  }

  postUser(userData: SignupReq) {
    return this.http.post(endpoint + "addUser", userData);
  }

  isAuthenticated() {

    if(this.cookies.get('token')) {
      return true;
    }
    return false;
  }

  logout() {
    this.cookies.delete('token');
    Router
  }
}
