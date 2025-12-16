import { Component } from '@angular/core';
import {Navbar} from './components/navbar/navbar';
import {Hero} from './components/hero/hero';
import {Services} from './components/services/services';
import {About} from './components/about/about';
import {Gallery} from './components/gallery/gallery';
import {Testimonial} from './components/testimonial/testimonial';
import {Contact} from './components/contact/contact';
import {Footer} from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Navbar,
    Hero,
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
