import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  template: `
    <div class="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="assets/carousel-1.jpg" alt="Carousel Image 1" />
        </div>
        <div class="carousel-item">
          <img src="assets/carousel-2.jpg" alt="Carousel Image 2" />
        </div>
        <div class="carousel-item">
          <img src="assets/carousel-3.jpg" alt="Carousel Image 3" />
        </div>
      </div>
    </div>
  `,
  styles: [`
    .carousel {
      position: relative;
      width: 100%;
      height: 500px;
      overflow: hidden;
    }
    .carousel-inner {
      display: flex;
      transition: transform 0.5s ease;
    }
    .carousel-item {
      min-width: 100%;
    }
    .carousel-item img {
      width: 100%;
      height: 500px;
      object-fit: cover;
    }
  `]
})
export class CarouselComponent {}
