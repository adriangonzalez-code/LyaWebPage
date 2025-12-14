import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  template: `
    <section class="gallery">
      <h2>Galería</h2>
      <div class="image-grid">
        <img src="assets/gallery-1.jpg" alt="Gallery Image 1" />
        <img src="assets/gallery-2.jpg" alt="Gallery Image 2" />
        <img src="assets/gallery-3.jpg" alt="Gallery Image 3" />
        <img src="assets/gallery-4.jpg" alt="Gallery Image 4" />
      </div>
    </section>
  `,
  styles: [`
    .gallery {
      padding: 50px 20px;
      text-align: center;
    }
    h2 {
      color: #1a1a1a; /* Negro carbón */
    }
    .image-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 10px;
      margin-top: 30px;
    }
    .image-grid img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      border-radius: 8px;
    }
  `]
})
export class GalleryComponent {}
