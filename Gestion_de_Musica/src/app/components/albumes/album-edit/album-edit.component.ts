import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { AlbumService } from '../../../services/album.service';
import { ArtistaService } from '../../../services/artista.service';
import { Album, CreateAlbum } from '../../../models/album.model';
import { Artista } from '../../../models/artista.model';

@Component({
  selector: 'app-album-edit',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  template: `
    <h2>Editar Álbum</h2>
    <form *ngIf="album" (ngSubmit)="updateAlbum()" #albumForm="ngForm">
      <div class="mb-3">
        <label class="form-label">Título</label>
        <input type="text" class="form-control" [(ngModel)]="album.titulo" name="titulo" required>
      </div>
      <div class="mb-3">
        <label class="form-label">Género</label>
        <input type="text" class="form-control" [(ngModel)]="album.genero" name="genero">
      </div>
      <div class="mb-3">
        <label class="form-label">Año de Lanzamiento</label>
        <input type="number" class="form-control" [(ngModel)]="album.año_lanzamiento" name="año_lanzamiento">
      </div>
      <div class="mb-3">
        <label class="form-label">Discográfica</label>
        <input type="text" class="form-control" [(ngModel)]="album.discografica" name="discografica">
      </div>
      <div class="mb-3">
        <label class="form-label">Artista</label>
        <select class="form-select" [(ngModel)]="album.artista_id" name="artista_id" required>
          <option *ngFor="let artista of artistas" [value]="artista.artista_id">
            {{ artista.nombre }} {{ artista.apellido }}
          </option>
        </select>
      </div>
      <button type="submit" class="btn btn-success">Actualizar</button>
      <a routerLink="/albumes" class="btn btn-secondary ms-2">Cancelar</a>
    </form>
  `
})
export class AlbumEditComponent implements OnInit {
  album: CreateAlbum | undefined;
  artistas: Artista[] = [];

  constructor(
    private albumService: AlbumService,
    private artistaService: ArtistaService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbum(id).subscribe(data => this.album = data);
    this.loadArtistas();
  }

  loadArtistas() {
    this.artistaService.getArtistas().subscribe(data => this.artistas = data);
  }

  updateAlbum() {
    if(this.album) {
      const id = Number(this.route.snapshot.paramMap.get('id'));
      this.albumService.updateAlbum(id, this.album).subscribe(() => this.router.navigate(['/albumes']));
    }
  }
}
