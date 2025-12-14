import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <section class="contact">
      <h2>Contacto</h2>
      <p>Ponte en contacto con nosotros para agendar tu cita.</p>
      <a href="mailto:contacto@lyastudio.com" class="cta-button">Enviar Email</a>
    </section>
  `,
  styles: [`
    .contact {
      padding: 50px 20px;
      text-align: center;
      background-color: #f5f5dc; /* Nude beige */
    }
    h2 {
      color: #1a1a1a; /* Negro carbón */
    }
    .cta-button {
      background-color: #daa520; /* Dorado suave */
      color: #1a1a1a; /* Negro carbón */
      padding: 10px 20px;
      text-decoration: none;
      border-radius: 5px;
      font-weight: bold;
      margin-top: 20px;
      display: inline-block;
    }
  `]
})
export class ContactComponent {}
