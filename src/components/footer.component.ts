import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer">
      <p>&copy; 2024 Lya Studio. Todos los derechos reservados.</p>
    </footer>
  `,
  styles: [`
    .footer {
      background-color: #1a1a1a; /* Negro carbón */
      color: #fdf5e6; /* Blanco cálido */
      text-align: center;
      padding: 20px 0;
    }
  `]
})
export class FooterComponent {}
