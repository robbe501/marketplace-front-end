import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private http: HttpClient,
    private cookies: CookieService,
    private auth: AuthService,
    private router: Router) {

  }


  getToken(email: string, password: string) {
    this.auth.getToken({
      email: email,
      password: password
    }).subscribe((loginRes) => {
      this.cookies.set("token", loginRes.token, new Date(new Date().getTime() + (1000 * 60 * 29)));
      this.cookies.set("userId", "1", new Date(new Date().getTime() + (1000 * 60 * 29)));
      this.router.navigate(['prodotti']);
    })
  }
}
