import { Routes } from '@angular/router';
import { ArtistaListComponent } from './components/artistas/artista-list/artista-list.component';
import { ArtistaFormComponent } from './components/artistas/artista-form/artista-form.component';
import { ArtistaEditComponent } from './components/artistas/artista-edit/artista-edit.component';
import { AlbumListComponent } from './components/albumes/album-list/album-list.component';
import { AlbumFormComponent } from './components/albumes/album-form/album-form.component';
import { AlbumEditComponent } from './components/albumes/album-edit/album-edit.component';

export const routes: Routes = [
  { path: '', redirectTo: 'artistas', pathMatch: 'full' },

  // Rutas Artistas
  { path: 'artistas', component: ArtistaListComponent },
  { path: 'artistas/form', component: ArtistaFormComponent },
  { path: 'artistas/edit/:id', component: ArtistaEditComponent },

  // Rutas Álbumes
  { path: 'albumes', component: AlbumListComponent },
  { path: 'albumes/form', component: AlbumFormComponent },
  { path: 'albumes/edit/:id', component: AlbumEditComponent },

  // Ruta fallback
  { path: '**', redirectTo: 'artistas' }
];
