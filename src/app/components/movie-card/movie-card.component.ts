import { Component, OnInit, Input } from '@angular/core';

import { MovieDetails } from '../../models/movie.model';
import { ApisService } from '../../services/apis.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
})
export class MovieCardComponent implements OnInit {
  @Input() list: MovieDetails = {
    id: '',
    title: '',
    release_date: '',
    poster_path: '',
  };
  urlImage: string = '';

  constructor(private apisServices: ApisService) {
    this.urlImage = this.apisServices.getMovieNasaDetailImage();
  }

  ngOnInit(): void {}
}
