import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component.js';
import { FooterComponent } from './footer/footer.component.js';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    NavbarComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit{
  vh100:object = {}
  @ViewChild(NavbarComponent) navchild!:NavbarComponent;

  ngAfterViewInit(): void {
    this.vh100 = {
      marginTop: `${this.navchild.nav.nativeElement.clientHeight}px`,
      minHeight: `calc(100vh - ${this.navchild.nav.nativeElement.clientHeight}px)`
    }
  }

  title = 'StartFramework';
}
