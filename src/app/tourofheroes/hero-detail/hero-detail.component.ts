import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../heroes/hero';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroesDetailComponent implements OnInit {

  ngOnInit(): void {
  }

  @Input() hero: Hero;

}
