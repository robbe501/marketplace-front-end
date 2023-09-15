
export interface Prodotto {
  prodottoId: number;
  nome: string;
  materiale: string;
  descrizione: string;
  prezzo: number;
  quantita: number;
  utenteId: number;
  imageId: number;
}




export interface PostProdottoReq {
  nome: string;
  materiale: string;
  descrizione: string;
  prezzo: number;
  utenteId: number;
  imageId: number;
}

export interface PutProdottoReq {
  prodottoId: number
  nome: string;
  materiale: string;
  descrizione: string;
  prezzo: number;
}
