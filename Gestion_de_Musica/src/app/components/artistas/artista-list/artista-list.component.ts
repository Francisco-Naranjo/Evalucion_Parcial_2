import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ArtistaService } from '../../../services/artista.service';
import { Artista } from '../../../models/artista.model';

@Component({
  selector: 'app-artista-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <h2>Lista de Artistas</h2>
    <a routerLink="/artistas/form" class="btn btn-primary mb-3">Nuevo Artista</a>
    <table class="table table-bordered table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Fecha Nacimiento</th>
          <th>Nacionalidad</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let artista of artistas">
          <td>{{ artista.artista_id }}</td>
          <td>{{ artista.nombre }}</td>
          <td>{{ artista.apellido }}</td>
          <td>{{ artista.fecha_nacimiento | date }}</td>
          <td>{{ artista.nacionalidad }}</td>
          <td>
            <a [routerLink]="['/artistas/edit', artista.artista_id]" class="btn btn-warning btn-sm">Editar</a>
            <button (click)="deleteArtista(artista.artista_id)" class="btn btn-danger btn-sm">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
  `
})
export class ArtistaListComponent implements OnInit {
  artistas: Artista[] = [];

  constructor(private artistaService: ArtistaService) {}

  ngOnInit(): void {
    this.loadArtistas();
  }

  loadArtistas() {
    this.artistaService.getArtistas().subscribe(data => this.artistas = data);
  }

  deleteArtista(id: number) {
    if(confirm('¿Desea eliminar este artista?')) {
      this.artistaService.deleteArtista(id).subscribe(() => this.loadArtistas());
    }
  }
}
