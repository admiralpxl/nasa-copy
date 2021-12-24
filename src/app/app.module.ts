import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MovieWallComponent } from './components/movie-wall/movie-wall.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { NasaSearchComponent } from './components/nasa-search/nasa-search.component';
import { NasaCardComponent } from './components/nasa-card/nasa-card.component';
import { HomeComponent } from './pages/home/home.component';
import { NasaComponent } from './pages/nasa/nasa.component';
import { MoviePageComponent } from './components/movie-page/movie-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MovieWallComponent,
    MovieDetailComponent,
    MovieCardComponent,
    NasaSearchComponent,
    NasaCardComponent,
    HomeComponent,
    NasaComponent,
    MoviePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
