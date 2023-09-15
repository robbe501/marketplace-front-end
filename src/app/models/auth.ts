export interface LoginReq {
  email: string;
  password: string;
}

export interface LoginRes {
  token: string;
}

export interface SignupReq {
  nome: string;
  cognome: string;
  codiceFiscale: string;
  cellulare: string;
  email: string;
  password: string;
  residenza: string;
  roles: string;
}


