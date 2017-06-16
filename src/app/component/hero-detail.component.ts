import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import { Hero } from '../model/Hero';
import { HeroService } from '../service/hero.service';

import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'hero-detail',
    templateUrl: 'hero-detail.html'              
})

export class HeroDetailComponent implements OnInit {
    @Input() hero: Hero;

    constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
    ){}

    ngOnInit(): void {
        console.log(this.route.params);
        this.route.params.switchMap((params: Params) => this.heroService.getHero(+params['id'])).subscribe(hero => this.hero = hero);
    }

    goBack(): void {
        this.location.back();
    }

}