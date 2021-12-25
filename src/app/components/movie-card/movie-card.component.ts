import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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
  @Output() send = new EventEmitter<string>();

  constructor(private apisServices: ApisService) {
    this.urlImage = this.apisServices.getMovieNasaDetailImage();
  }

  getId() {
    console.log(this.list.id + ' log hijo');
    this.send.emit(this.list.id);
  }

  ngOnInit(): void {}
}
