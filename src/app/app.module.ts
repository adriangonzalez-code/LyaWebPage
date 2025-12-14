import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from '../components/header.component';
import { CarouselComponent } from '../components/carousel.component';
import { ServicesComponent } from '../components/services.component';
import { GalleryComponent } from '../components/gallery.component';
import { ContactComponent } from '../components/contact.component';
import { FooterComponent } from '../components/footer.component';

@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    ServicesComponent,
    GalleryComponent,
    FooterComponent,
    ContactComponent
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
