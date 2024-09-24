import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth'

const firebaseConfig = {
  apiKey: "AIzaSyB0SVr14vPfVTPNCGoJvfF83_sgOb28eAI",
  authDomain: "trendify-server.firebaseapp.com",
  projectId: "trendify-server",
  storageBucket: "trendify-server.appspot.com",
  messagingSenderId: "451834495944",
  appId: "1:451834495944:web:34405c3d15f762b976f6fd"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth())
  ]
};
