import { Component } from '@angular/core';
import { startWith } from 'rxjs';
import { StarComponent } from '../star/star.component.js';

@Component({
  selector: 'app-about',
  imports: [
    StarComponent
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  textData:string = 'about component';
}
