import { Component, OnInit } from '@angular/core';

import { Apod } from '../../models/nasaApod.model';

@Component({
  selector: 'app-nasa-card',
  templateUrl: './nasa-card.component.html',
  styleUrls: ['./nasa-card.component.css'],
})
export class NasaCardComponent implements OnInit {
  constructor() {}

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
  nasaApiKey: string = 'SPkLKA7bCBamNIY9kJ4ceIeWB67uFjxP5lXkQeNR';

  ngOnInit(): void {
    this.nasaGetInfo();
  }

  async nasaGetInfo() {
    let response = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${this.nasaApiKey}`
    );
    this.nasaApodInfo = await response.json();
    console.log(this.nasaApodInfo);
  }
}
