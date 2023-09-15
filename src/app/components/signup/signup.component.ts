import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(
    private http: HttpClient,
    private auth: AuthService,
    private router: Router) {
  }

  signup(nome: string, cognome: string, codiceFiscale: string, cellulare: string, residenza: string, email: string, password: string) {
    this.auth.postUser({
      nome: nome,
      cognome: cognome,
      codiceFiscale: codiceFiscale,
      cellulare: cellulare,
      residenza: residenza,
      email: email,
      password: password,
      roles: "ROLE_USER"
    }).subscribe({
      next: (v) => console.log(v),
      error: (e) => console.error(e),
      complete: () => this.router.navigate(['accedi']) }
    );

  }


}
