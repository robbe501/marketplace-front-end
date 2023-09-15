export interface Immagine {
  imageId: number;
  name: string;
  type: string;
  image: string;
}

export interface ImmagineLight {
  imageId: number;
}

export interface ImageReq {
  image: File;
}
