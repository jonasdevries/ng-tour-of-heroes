import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './component/dashboard.component';
import { HeroesComponent } from './component/heroes.component';
import { HeroDetailComponent } from './component/hero-detail.component';
import { HeroService } from './service/hero.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'detail/:id',
        component: HeroDetailComponent
      },
      {
        path: 'heroes',
        component: HeroesComponent
      },      
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      }
    ])    
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})

export class AppModule {}