import { Immagine } from "./immagine";
import { Utente } from "./utente";

export interface Prodotto {
  prodottoId: number;
  nome: string;
  materiale: string;
  descrizione: string;
  prezzo: number;
  quantita: number;
  utente: Utente;
  image: Immagine;
}




export interface PostProdottoReq {
  nome: string;
  materiale: string;
  descrizione: string;
  prezzo: number;
  utenteId: number;
  imageId: number;
}
