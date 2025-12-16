import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-hero',
  standalone: true, // Mark as standalone
  imports: [CommonModule], // Import CommonModule
  templateUrl: './hero.html',
  styleUrls: ['./hero.css']
})
export class HeroComponent implements OnInit, OnDestroy {
  images = [
    'https://atura.like-themes.com/wp-content/uploads/2021/12/SLIDE_01.jpg',
    'https://atura.like-themes.com/wp-content/uploads/2021/12/SLIDE_02.jpg',
    'https://atura.like-themes.com/wp-content/uploads/2021/12/SLIDE_03.jpg',
    'https://atura.like-themes.com/wp-content/uploads/2021/12/SLIDE_04.jpg',
  ];
  currentImageIndex = 0;
  intervalId: any;

  constructor(private cdr: ChangeDetectorRef) {
    this.intervalId = setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
      this.cdr.detectChanges();
    }, 5000);
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
