import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  /* la méthode getHeroes renvoie un observable qui 
   me donnera un Array de Hero */
  getHeroes() : Observable<Hero[]> {
    // le of permet d'encapsuler un résultat dans un observable
    return of(HEROES); 
  }

}
