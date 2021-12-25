import { Component, OnInit } from '@angular/core';

import { Apod } from '../../models/nasaApod.model';
import { ApisService } from '../../services/apis.service';

@Component({
  selector: 'app-nasa-card',
  templateUrl: './nasa-card.component.html',
  styleUrls: ['./nasa-card.component.css'],
})
export class NasaCardComponent implements OnInit {
  nasaApodInfo: Apod = {
    copyright: '',
    date: '',
    explanation: '',
    hdurl: '',
    media_types: '',
    service_version: '',
    title: '',
    url: '',
  };
  nasaUrl: string = '';

  constructor(private apisServise: ApisService) {
    this.nasaUrl = this.apisServise.getNasaApodInfo();
  }

  ngOnInit(): void {
    this.getNasaInfo();
  }

  async getNasaInfo() {
    let response = await fetch(this.nasaUrl);
    this.nasaApodInfo = await response.json();
  }
}
