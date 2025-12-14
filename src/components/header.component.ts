import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header class="header">
      <nav class="navbar">
        <div class="nav-links">
          <a href="#">Inicio</a>
          <a href="#">Servicios</a>
        </div>
        <div class="logo">
          <img src="assets/logo.png" alt="Lya Studio Logo" />
        </div>
        <div class="nav-links">
          <a href="#">Galería</a>
          <a href="#">Contacto</a>
        </div>
      </nav>
    </header>
  `,
  styles: [`
    .header {
      background-color: #1a1a1a; /* Negro carbón */
      padding: 20px 0;
    }
    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 1200px;
      margin: 0 auto;
    }
    .nav-links a {
      color: #fdf5e6; /* Blanco cálido */
      text-decoration: none;
      margin: 0 15px;
      font-size: 16px;
    }
    .logo img {
      height: 50px;
    }
  `]
})
export class HeaderComponent {}
