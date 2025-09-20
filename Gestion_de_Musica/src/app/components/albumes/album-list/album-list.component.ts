import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AlbumService } from '../../../services/album.service';
import { Album } from '../../../models/album.model';

@Component({
  selector: 'app-album-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <h2>Lista de Álbumes</h2>
    <a routerLink="/albumes/form" class="btn btn-primary mb-3">Nuevo Álbum</a>
    <table class="table table-bordered table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Título</th>
          <th>Género</th>
          <th>Año</th>
          <th>Discográfica</th>
          <th>Artista</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let album of albumes">
          <td>{{ album.album_id }}</td>
          <td>{{ album.titulo }}</td>
          <td>{{ album.genero }}</td>
          <td>{{ album.año_lanzamiento }}</td>
          <td>{{ album.discografica }}</td>
          <td>{{ album.nombre_artista }}</td>
          <td>
            <a [routerLink]="['/albumes/edit', album.album_id]" class="btn btn-warning btn-sm">Editar</a>
            <button (click)="deleteAlbum(album.album_id)" class="btn btn-danger btn-sm">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
  `
})
export class AlbumListComponent implements OnInit {
  albumes: Album[] = [];

  constructor(private albumService: AlbumService) {}

  ngOnInit(): void {
    this.loadAlbumes();
  }

  loadAlbumes() {
    this.albumService.getAlbumes().subscribe(data => this.albumes = data);
  }

  deleteAlbum(id: number) {
    if(confirm('¿Desea eliminar este álbum?')) {
      this.albumService.deleteAlbum(id).subscribe(() => this.loadAlbumes());
    }
  }
}
