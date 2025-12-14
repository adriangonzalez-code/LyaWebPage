import { Component } from '@angular/core';

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
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LyaStudio';
}
