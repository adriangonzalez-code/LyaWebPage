import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  template: `
    <section class="services">
      <h2>Nuestros Servicios</h2>
      <div class="service-list">
        <div class="service-item">
          <h3>Manicura</h3>
          <p>Manicura completa con esmaltado tradicional o semipermanente.</p>
        </div>
        <div class="service-item">
          <h3>Pedicura</h3>
          <p>Pedicura completa para unos pies suaves y bonitos.</p>
        </div>
        <div class="service-item">
          <h3>Uñas Esculpidas</h3>
          <p>Uñas de gel o acrílicas con la forma y largo que desees.</p>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .services {
      padding: 50px 20px;
      text-align: center;
      background-color: #f5f5dc; /* Nude beige */
    }
    h2 {
      color: #1a1a1a; /* Negro carbón */
    }
    .service-list {
      display: flex;
      justify-content: center;
      gap: 20px;
      margin-top: 30px;
    }
    .service-item {
      background-color: #fdf5e6; /* Blanco cálido */
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      width: 300px;
    }
    h3 {
      color: #daa520; /* Dorado suave */
    }
  `]
})
export class ServicesComponent {}
