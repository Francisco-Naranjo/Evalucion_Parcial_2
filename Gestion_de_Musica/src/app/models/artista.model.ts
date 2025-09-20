export interface Artista {
  artista_id: number;
  nombre: string;
  apellido: string;
  fecha_nacimiento?: Date;
  nacionalidad?: string;
  nombre_completo?: string;
}

export interface CreateArtista {
  nombre: string;
  apellido: string;
  fecha_nacimiento?: Date;
  nacionalidad?: string;
}
