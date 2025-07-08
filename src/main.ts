import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withHashLocation, withInMemoryScrolling, InMemoryScrollingOptions, InMemoryScrollingFeature } from '@angular/router';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';

const scrollConfig: InMemoryScrollingOptions = {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
    };
const inMemoryScrollingFeature: InMemoryScrollingFeature = withInMemoryScrolling(scrollConfig);

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes, withHashLocation(), inMemoryScrollingFeature),
  ]
}).catch(err => console.error(err));
