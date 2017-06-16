import { Injectable } from '@angular/core';
import { Hero } from '../model/hero';
import { HEROES } from '../mock/mock-heroes';


@Injectable()
export class HeroService {

     getHeroesSlowly(): Promise<Hero[]> {
        return new Promise(resolve => {        
            setTimeout(() => resolve(this.getHeroes()), 2000);
        });
    }
    getPromiseHeroes(): Promise<Hero[]>{
        return Promise.resolve(HEROES);
    }
    getHeroes(): Hero[] {
        return HEROES;
    }
    getHero(id: number): Promise<Hero> {
        return this.getPromiseHeroes().then(heroes => heroes.find(hero => hero.id === id));
    }
}