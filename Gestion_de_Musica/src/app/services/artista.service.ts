import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Artista, CreateArtista } from '../models/artista.model';

@Injectable({
  providedIn: 'root'
})
export class ArtistaService {
  private apiUrl = 'https://localhost:7259/api/Artistas'; // Ajusta según tu backend

  constructor(private http: HttpClient) {}

  getArtistas(): Observable<Artista[]> {
    return this.http.get<Artista[]>(this.apiUrl);
  }

  getArtista(id: number): Observable<Artista> {
    return this.http.get<Artista>(`${this.apiUrl}/${id}`);
  }

  createArtista(artista: CreateArtista): Observable<Artista> {
    return this.http.post<Artista>(this.apiUrl, artista);
  }

  updateArtista(id: number, artista: CreateArtista): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, artista);
  }

  deleteArtista(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
