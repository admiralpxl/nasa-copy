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
  pageMovieList: string = '1';
  showSide: boolean = false;
  idMovie: string = '';
  listMovie: MovieDetails[] = [
    {
      id: '',
      title: '',
      release_date: '',
      poster_path: '',
    },
  ];

  constructor(private apisService: ApisService) {
    this.listUrlMovies = this.apisService.getMovieNasaList(this.pageMovieList);
  }

  ngOnInit(): void {
    this.getNasaMovieList();
  }
  ngOnChanges(): void {}

  idMovieDetail(id: string) {
    this.idMovie = id;
    this.showSide = !this.showSide;
  }
  closeWindow(change: boolean) {
    this.showSide = change;
  }

  async getNasaMovieList() {
    let response = await fetch(this.listUrlMovies);
    let data = await response.json();
    this.listMovie = data.results.filter(
      (item: { poster_path: null }) => item.poster_path !== null
    );
  }
}
