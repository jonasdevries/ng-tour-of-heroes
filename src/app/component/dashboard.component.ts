import { Component , OnInit} from '@angular/core';
import { Hero } from '../model/Hero';
import { HeroService } from '../service/hero.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: './dashboard.html'
})

export class DashboardComponent implements OnInit{

    heroes: Hero[] = [];

    constructor(private heroService: HeroService){}

    ngOnInit(): void {
        this.heroService.getPromiseHeroes().then(heroes => this.heroes = heroes.slice(1,5));
    }

}