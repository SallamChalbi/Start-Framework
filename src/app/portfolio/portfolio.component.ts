import { Component } from '@angular/core';
import { StarComponent } from '../star/star.component.js';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  imports: [
    StarComponent,
    NgFor,
    NgIf
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  textData:string = 'portfolio component';
  imagePath:string = ''
  imgs:string[] = [
    './assets/imgs/poert1.png',
    './assets/imgs/port2.png',
    './assets/imgs/port3.png',
    './assets/imgs/poert1.png',
    './assets/imgs/port2.png',
    './assets/imgs/port3.png',
  ]

  flag:boolean = true;

  closeModal(element:EventTarget | null, img: HTMLImageElement): void {
    if (element == img) 
      return;

    this.flag = true
  }
}
