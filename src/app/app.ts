import { Component } from '@angular/core';
import {Navbar} from './components/navbar/navbar';
import {Services} from './components/services/services';
import {About} from './components/about/about';
import {Gallery} from './components/gallery/gallery';
import {Testimonial} from './components/testimonial/testimonial';
import {Contact} from './components/contact/contact';
import {Footer} from './components/footer/footer';
import {HeroComponent} from './components/hero/hero';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Navbar,
    HeroComponent,
    Services,
    About,
    Gallery,
    Testimonial,
    Contact,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
