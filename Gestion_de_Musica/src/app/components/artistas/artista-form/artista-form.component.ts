import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ArtistaService } from '../../../services/artista.service';
import { CreateArtista } from '../../../models/artista.model';

@Component({
  selector: 'app-artista-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  template: `
    <h2>Nuevo Artista</h2>
    <form (ngSubmit)="saveArtista()" #artistaForm="ngForm">
      <div class="mb-3">
        <label class="form-label">Nombre</label>
        <input type="text" class="form-control" [(ngModel)]="artista.nombre" name="nombre" required>
      </div>
      <div class="mb-3">
        <label class="form-label">Apellido</label>
        <input type="text" class="form-control" [(ngModel)]="artista.apellido" name="apellido" required>
      </div>
      <div class="mb-3">
        <label class="form-label">Fecha de Nacimiento</label>
        <input type="date" class="form-control" [(ngModel)]="artista.fecha_nacimiento" name="fecha_nacimiento">
      </div>
      <div class="mb-3">
        <label class="form-label">Nacionalidad</label>
        <input type="text" class="form-control" [(ngModel)]="artista.nacionalidad" name="nacionalidad">
      </div>
      <button type="submit" class="btn btn-success">Guardar</button>
      <a routerLink="/artistas" class="btn btn-secondary ms-2">Cancelar</a>
    </form>
  `
})
export class ArtistaFormComponent {
  artista: CreateArtista = { nombre: '', apellido: '' };

  constructor(private artistaService: ArtistaService, private router: Router) {}

  saveArtista() {
    this.artistaService.createArtista(this.artista).subscribe(() => this.router.navigate(['/artistas']));
  }
}
