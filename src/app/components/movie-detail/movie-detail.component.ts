import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { MovieInfoDetails } from 'src/app/models/movie.model';
import { ApisService } from 'src/app/services/apis.service';

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
  imageUrl: string = '';
  @Input() showInfo: boolean = false;
  @Input() idMovie: string = '';
  @Output() change = new EventEmitter<boolean>();

  constructor(private apisServices: ApisService) {
    this.imageUrl = this.apisServices.getMovieNasaDetailImage();
  }

  ngOnInit(): void {
    this.getDetailMovie(this.idMovie);
  }

  toggleButton() {
    this.showInfo = false;
    this.change.emit();
  }

  async getDetailMovie(id: string) {
    let response = await fetch(this.apisServices.getMovieDetail(id));
    this.movieDetail = await response.json();
  }
}
