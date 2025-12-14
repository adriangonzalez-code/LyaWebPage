import { Component } from '@angular/core';
import { NavbarComponent } from '../components/navbar.component';
import { HeroComponent } from '../components/hero.component';
import { ServicesComponent } from '../components/services.component';
import { GalleryComponent } from '../components/gallery.component';
import { ContactComponent } from '../components/contact.component';
import { FooterComponent } from '../components/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    ServicesComponent,
    GalleryComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
