import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApisService {
  nasaApiKey: string = 'SPkLKA7bCBamNIY9kJ4ceIeWB67uFjxP5lXkQeNR';
  movieKey: string = '48b43c71c226d58239efb833d05ab17c';
  private urlImage: string = 'https://image.tmdb.org/t/p/original/';
  private nasaApodApi: string = `https://api.nasa.gov/planetary/apod?api_key=${this.nasaApiKey}`;
  private theMovieIdApiBase: string = 'https://api.themoviedb.org/3';
  private movieNasaInfoApi: string = `https://api.themoviedb.org/3/search/movie?api_key=${this.movieKey}c&language=en-US&query=NASA&page=1&include_adult=false`;

  constructor() {}

  getMovieNasaList() {
    return this.movieNasaInfoApi;
  }
  getMovieDetail(id: string) {
    return `${this.theMovieIdApiBase}/movie/${id}?api_key=${this.movieKey}`;
  }
  getMovieNasaDetailImage(rul: string) {
    return `${this.urlImage}`;
  }
  getNasaApodInfo() {
    return this.nasaApodApi;
  }
}
