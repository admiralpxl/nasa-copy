import { Component, OnInit } from '@angular/core';

import { MovieDetails } from 'src/app/models/movie.model';
import { ApisService } from '../../services/apis.service';

@Component({
  selector: 'app-movie-wall',
  templateUrl: './movie-wall.component.html',
  styleUrls: ['./movie-wall.component.css'],
})
export class MovieWallComponent implements OnInit {
  listUrlMovies: string = '';
  detailListMovieUrl: string = '';
  imageMovieUrl: string = '';
  listMovie: MovieDetails[] = [
    {
      id: '',
      title: '',
      release_date: '',
      poster_path: '',
    },
  ];

  constructor(private apisService: ApisService) {
    this.listUrlMovies = this.apisService.getMovieNasaList();
  }

  ngOnInit(): void {
    this.getNaseMovieList();
  }

  async getNaseMovieList() {
    let response = await fetch(this.listUrlMovies);
    let data = await response.json();
    console.log(data);
    console.log(data.results);
    this.listMovie = data.results.filter(
      (item: { poster_path: null }) => item.poster_path !== null
    );
    console.log(this.listMovie);
  }
}
