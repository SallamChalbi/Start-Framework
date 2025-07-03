import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component.js';
import { AboutComponent } from './about/about.component.js';
import { PortfolioComponent } from './portfolio/portfolio.component.js';
import { ContactComponent } from './contact/contact.component.js';
import { NotfoundComponent } from './notfound/notfound.component.js';

export const routes: Routes = [
    { path: '', component: HomeComponent, title: 'home' },
    { path: 'about', component: AboutComponent, title: 'about' },
    { path: 'portfolio', component: PortfolioComponent, title: 'portfolio' },
    { path: 'contact', component: ContactComponent, title: 'contact' },
    { path: '**', component: NotfoundComponent, title: '404' } // Wildcard route for a 404 page
];
