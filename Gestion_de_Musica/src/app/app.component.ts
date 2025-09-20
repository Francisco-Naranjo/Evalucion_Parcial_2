import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule.forRoot(routes)],
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
      <div class="container">
        <a class="navbar-brand" routerLink="/">Gestión de Música</a>
        <div>
          <ul class="navbar-nav me-auto">
            <li class="nav-item"><a class="nav-link" routerLink="/artistas">Artistas</a></li>
            <li class="nav-item"><a class="nav-link" routerLink="/albumes">Álbumes</a></li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {}

