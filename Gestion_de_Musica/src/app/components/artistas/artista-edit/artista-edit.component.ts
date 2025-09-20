import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { ArtistaService } from '../../../services/artista.service';
import { Artista, CreateArtista } from '../../../models/artista.model';

@Component({
  selector: 'app-artista-edit',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  template: `
    <h2>Editar Artista</h2>
    <form *ngIf="artista" (ngSubmit)="updateArtista()" #artistaForm="ngForm">
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
      <button type="submit" class="btn btn-success">Actualizar</button>
      <a routerLink="/artistas" class="btn btn-secondary ms-2">Cancelar</a>
    </form>
  `
})
export class ArtistaEditComponent implements OnInit {
  artista: CreateArtista | undefined;

  constructor(private artistaService: ArtistaService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.artistaService.getArtista(id).subscribe(data => this.artista = data);
  }

  updateArtista() {
    if(this.artista) {
      const id = Number(this.route.snapshot.paramMap.get('id'));
      this.artistaService.updateArtista(id, this.artista).subscribe(() => this.router.navigate(['/artistas']));
    }
  }
}
