import { Component } from '@angular/core';
import { StarComponent } from '../star/star.component.js';

@Component({
  selector: 'app-home',
  imports: [
    StarComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  imgPath:string = './assets/imgs/avataaars.svg';
  imgAlt:string = 'Avatar Image';

  textData:string = 'start Framework';
}
