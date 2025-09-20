export interface Album {
  album_id: number;
  titulo: string;
  genero?: string;
  año_lanzamiento?: number;
  discografica?: string;
  artista_id?: number;
  nombre_artista?: string;
}

export interface CreateAlbum {
  titulo: string;
  genero?: string;
  año_lanzamiento?: number;
  discografica?: string;
  artista_id?: number;
}
