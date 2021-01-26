import { Component, OnInit } from '@angular/core';

import { TitelSlide, Slide } from "./slide";
import { TITELSLIDE, SLIDES } from './slide-data';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {

  eersteSlide: TitelSlide;
  slides: Slide[];
  slideGestart: boolean;
  huidigeSlide: number;
  huidigeItems: string[];
  laatsteSlide: number;

  constructor() { 
    this.eersteSlide = TITELSLIDE;
    this.slides = SLIDES;
    this.huidigeSlide = 0;
    this.huidigeItems = SLIDES[0].items;
    this.laatsteSlide = this.slides.length;
  }

  ngOnInit() {
    this.slideGestart = false;
  }

  startSlide() {
    this.slideGestart = true;
  }

  volgendeSlide() {
    this.huidigeSlide = this.huidigeSlide + 1;
  }

  vorigeSlide() {
    this.huidigeSlide = this.huidigeSlide - 1;
  }


}
