import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [ RouterModule ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @ViewChild('navRef') nav!:ElementRef

  /* animationScroll(navbar:HTMLElement):void{    
    window.scrollY > 30 ? navbar.classList.remove('py-4') : navbar.classList.add('py-4')
  } */
  // or

  @HostListener('window:scroll')
  animationScroll():void{    
    window.scrollY > 30 ? this.nav.nativeElement.classList.remove('py-4') : this.nav.nativeElement.classList.add('py-4')
  }
}
