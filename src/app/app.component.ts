import { Component } from '@angular/core';
import {HeaderComponent} from '../components/header.component';
import {CarouselComponent} from '../components/carousel.component';
import {ServicesComponent} from '../components/services.component';
import {GalleryComponent} from '../components/gallery.component';
import {ContactComponent} from '../components/contact.component';
import {FooterComponent} from '../components/footer.component';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <app-carousel></app-carousel>
    <app-services></app-services>
    <app-gallery></app-gallery>
    <app-contact></app-contact>
    <app-footer></app-footer>
  `,
  imports: [
    HeaderComponent,
    CarouselComponent,
    ServicesComponent,
    GalleryComponent,
    ContactComponent,
    FooterComponent
  ],
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'LyaStudio';
}
