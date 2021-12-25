import { Component, OnInit } from '@angular/core';

import { MovieInfoDetails } from 'src/app/models/movie.model';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
})
export class MovieDetailComponent implements OnInit {
  movieDetail: MovieInfoDetails = {
    title: '',
    overview: '',
    homepage: '',
    released_date: '',
    budget: 0,
    status: '',
    revenue: 0,
    poster_path: '',
    vote_average: '',
  };
  constructor() {}

  ngOnInit(): void {}
}
