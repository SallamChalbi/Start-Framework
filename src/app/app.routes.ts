import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: ()=>import('./home/home.component.js').then((m)=>m.HomeComponent), title: 'home' },
    { path: 'about', loadComponent: ()=>import('./about/about.component.js').then((m)=>m.AboutComponent), title: 'about' },
    { path: 'portfolio', loadComponent: ()=>import('./contact/contact.component.js').then((m)=>m.ContactComponent), title: 'portfolio' },
    { path: 'contact', loadComponent: ()=>import('./portfolio/portfolio.component.js').then((m)=>m.PortfolioComponent), title: 'contact' },
    { path: '**', loadComponent: ()=>import('./notfound/notfound.component.js').then((m)=>m.NotfoundComponent), title: '404' } // Wildcard route for a 404 page
];
