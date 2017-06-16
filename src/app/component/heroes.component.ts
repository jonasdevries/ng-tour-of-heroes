import { Component, OnInit } from '@angular/core';
import { Hero } from '../model/Hero';
import { HeroService } from '../service/hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.html',
  styleUrls: ['./heroes.component.css'],
  providers: []
})

export class HeroesComponent implements OnInit {
  selectedHero: Hero;    
  heroes:Hero[];

  constructor(private heroService: HeroService){}

  ngOnInit():void{
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }

  getPromiseHeroes(): void {
    this.heroService.getPromiseHeroes()
                     .then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void{
    this.selectedHero = hero
  }
}