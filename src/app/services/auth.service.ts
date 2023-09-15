import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { endpoint } from '../config/endpoint.config';
import { LoginReq, LoginRes, SignupReq } from '../models/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getToken(userData: LoginReq) {
    return this.http.post<LoginRes>(endpoint + "getToken", userData);
  }

  postUser(userData: SignupReq) {
    return this.http.post(endpoint + "addUser", userData);
  }
}
